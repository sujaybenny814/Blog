import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/users.controller';
import { UserService } from 'src/service/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import {Blog , BlogSchema} from "../schema/blog.schema"
import {User , UserSchema} from "../schema/user.schema"
import {Category , CategorySchema} from "../schema/category.schema"


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema },
    { name: Blog.name, schema: BlogSchema },{ name: Category.name, schema: CategorySchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule {}