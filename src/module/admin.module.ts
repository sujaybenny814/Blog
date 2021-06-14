import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from '../controller/admin.controller';
import { AdminService } from '../service/admin.service';
import {User ,UserSchema} from "../schema/user.schema"
import {Admin ,AdminSchema} from "../schema/admin.schema"
import { AuthenticationService } from 'src/service/authentication.service';
import { AuthModule } from './auth.module';
import { Category , CategorySchema } from 'src/schema/category.schema';
import {Blog , BlogSchema} from "../schema/blog.schema"


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema },{ name: Admin.name, schema: AdminSchema },
    { name: Category.name, schema: CategorySchema },{ name: Blog.name, schema: BlogSchema }
  ]),AuthModule],
  controllers: [AdminController],
  providers: [AdminService,AuthenticationService],
})
export class AdminModule {
  
}