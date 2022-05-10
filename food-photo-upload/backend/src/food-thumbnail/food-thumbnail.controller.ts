import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Query,
  ParseIntPipe,
  UploadedFiles,
  UseGuards,
} from '@nestjs/common';
import { FoodThumbnailService } from './food-thumbnail.service';
import { CreateFoodThumbnailDto } from './dto/create-food-thumbnail.dto';
import { UpdateFoodThumbnailDto } from './dto/update-food-thumbnail.dto';
import { FindInterceptor } from 'src/interceptors/find.interceptor';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('food-thumbnail')
@UseInterceptors(FindInterceptor)
export class FoodThumbnailController {
  constructor(private readonly foodThumbnailService: FoodThumbnailService) {}

  @Post()
  @UseGuards(AuthenticatedGuard)
  create(@Body() createFoodThumbnailDto: CreateFoodThumbnailDto) {
    return this.foodThumbnailService.create(createFoodThumbnailDto);
  }

  @Get()
  @UseGuards(AuthenticatedGuard)
  findAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('query') query: string,
    @Query('type') type: 'integration' | 'domestic' | 'foreign',
    @Query('thumb') thumb: 'all' | 'exist' | 'nothing',
  ) {
    return this.foodThumbnailService.findAll(page, limit, query, type, thumb);
  }

  @Post(':id')
  @UseInterceptors(FilesInterceptor('thumnails'))
  @UseGuards(AuthenticatedGuard)
  findOne(
    @Param('id') id: string,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.foodThumbnailService.upload(id, files);
  }
  @Post('26dbf9e7-3c8e-4750-8219-06777a642fb3/:id')
  @UseInterceptors(FilesInterceptor('thumnails'))
  findOneSecret(
    @Param('id') id: string,
    @Body() { thumbnails }: { thumbnails: string[] },
  ) {
    console.log(id, thumbnails);
    return this.foodThumbnailService.uploadSecret(id, thumbnails);
    // return this.foodThumbnailService.upload(id, files);
  }

  @Delete(':id/:file')
  remove(@Param('id') id: string, @Param('file') file: string) {
    return this.foodThumbnailService.remove(id, file);
  }
}
