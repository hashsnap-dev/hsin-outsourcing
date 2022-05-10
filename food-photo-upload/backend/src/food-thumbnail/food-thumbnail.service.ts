import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { S3Module } from 'src/aws-s3/aws-s3.module';
import { DbWrapper } from 'src/database/database.module';
import { emptyList, resList } from 'src/interceptors/find.interceptor';
import { CreateFoodThumbnailDto } from './dto/create-food-thumbnail.dto';
import { UpdateFoodThumbnailDto } from './dto/update-food-thumbnail.dto';

@Injectable()
export class FoodThumbnailService {
  constructor(private db: DbWrapper, private s3: S3Module) {}

  create(createFoodThumbnailDto: CreateFoodThumbnailDto) {
    return 'This action adds a new foodThumbnail';
  }

  findAll(
    page = 1,
    limit = 10,
    query = '',
    type: 'integration' | 'domestic' | 'foreign' = 'integration',
    thumb: 'all' | 'exist' | 'nothing',
  ) {
    const targets = this.db.IntegrationFoodThumbnailList.find({
      ...(type !== 'integration' && { type }),
      ...(query && {
        $or: [
          { name: { $regex: query } },
          { company: { $regex: query } },
          { report_no: { $regex: query } },
        ],
      }),
      ...(thumb === 'all'
        ? {}
        : thumb === 'exist'
        ? { 'thumbnails.0': { $exists: true } }
        : thumb === 'nothing'
        ? { thumbnails: { $size: 0 } }
        : {}),
    });
    return resList(targets, { page, limit });
  }

  findOne(id: number) {
    return `This action returns a #${id} foodThumbnail`;
  }

  async upload(id: string, files: Express.Multer.File[]) {
    const food = await this.db.IntegrationFoodThumbnailList.findOne({
      report_no: id,
    });

    if (files.some((file) => file.mimetype.split('/').shift() !== 'image'))
      throw new HttpException(
        'Only image files can be uploaded.',
        HttpStatus.FORBIDDEN,
      );

    const promises = files.map(async (file) => {
      const fileEndpoint = nanoid();
      await this.s3.upload(
        'health-functional-food',
        `saved/${id}/${fileEndpoint}`,
        file.buffer,
        file.mimetype,
      );
      return fileEndpoint;
    });
    const fileEndpoints = await Promise.all(promises);

    if (!food)
      throw new HttpException('Invalid report number.', HttpStatus.FORBIDDEN);
    await this.db.IntegrationFoodThumbnailList.updateOne(food, {
      $push: { thumbnails: { $each: fileEndpoints } },
    });
    return emptyList;
  }
  async uploadSecret(id: string, thumbnails: string[]) {
    const target = await this.db.IntegrationFoodThumbnailList.findOne({
      report_no: id,
    });
    if (target.thumbnails.length)
      throw new HttpException('이미 등록된 썸네일', HttpStatus.FORBIDDEN);

    await this.db.IntegrationFoodThumbnailList.updateOne(
      { report_no: id },
      {
        $set: { thumbnails },
      },
    );

    return emptyList;
  }
  async remove(id: string, file: string) {
    const food = await this.db.IntegrationFoodThumbnailList.findOne({
      report_no: id,
    });
    if (!food)
      throw new HttpException('Invalid report number.', HttpStatus.FORBIDDEN);

    const targetFileIndex = food.thumbnails.indexOf(file);
    if (targetFileIndex === -1)
      throw new HttpException('Invalid file endpoint.', HttpStatus.FORBIDDEN);

    await this.s3.delete('health-functional-food', `saved/${id}/${file}`);

    await this.db.IntegrationFoodThumbnailList.updateOne(food, {
      $set: {
        thumbnails: food.thumbnails.filter((item) => item !== file),
      },
    });

    return emptyList;
  }
}
