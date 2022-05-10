import { Module } from '@nestjs/common';
import { FoodThumbnailService } from './food-thumbnail.service';
import { FoodThumbnailController } from './food-thumbnail.controller';

@Module({
  controllers: [FoodThumbnailController],
  providers: [FoodThumbnailService],
})
export class FoodThumbnailModule {}
