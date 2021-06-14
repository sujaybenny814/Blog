import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
  @Prop({required: true , default:"ADMIN" })
  name: string;

  @Prop({ required: true,unique: true ,default:"admin@admin.com"})
  email: string;

  @Prop({required:true,default:"$2b$10$MNevG6TC4j03YAWUwrSIm.3Qh.qlnr1Y4OPtRgxwpShsppiXS1tmq"})
  password: string;

  @Prop({required:true,default:"admin"})
  role: string;

  @Prop({required:true,default:"active"})
  status: string;
}


export const AdminSchema = SchemaFactory.createForClass(Admin);
