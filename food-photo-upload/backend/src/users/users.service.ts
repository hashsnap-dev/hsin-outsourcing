import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DbWrapper } from 'src/database/database.module';
import { UserPasswordService } from './user-password.service';

@Injectable()
export class UsersService {
  constructor(
    private db: DbWrapper,
    private userPasswordService: UserPasswordService,
  ) {}

  async findOne(username: string) {
    return this.db.User.findOne({ username });
  }

  async createUser(username: string, password: string, email: string) {
    const { hash, salt } = this.userPasswordService.createPassword(password);
    try {
      await this.db.User.insertOne({ username, password: hash, salt, email });
      return { username, email };
    } catch (err) {
      throw new HttpException('Duplicate user.', HttpStatus.FORBIDDEN);
    }
  }
}
