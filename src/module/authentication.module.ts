import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationController } from '../controller/authentication.controller';
import { AuthenticationService } from '../service/authentication.service';
import {User ,UserSchema} from "../schema/user.schema"
import {Admin,AdminSchema} from "../schema/admin.schema"
import { AuthModule } from './auth.module';



@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema },{ name: Admin.name, schema: AdminSchema }]),AuthModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}