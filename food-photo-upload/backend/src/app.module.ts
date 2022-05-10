import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { S3Module } from './aws-s3/aws-s3.module';
import { DatabaseModule } from './database/database.module';
import { FoodThumbnailModule } from './food-thumbnail/food-thumbnail.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    DatabaseModule,
    S3Module,
    FoodThumbnailModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
