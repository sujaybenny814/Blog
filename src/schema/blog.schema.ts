import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog  & Document;

@Schema()
export class Blog {
  @Prop({ required: true,unique: true })
  title: string;

  @Prop({required:true,default:"active"})
  status: string;

  @Prop({required:true})
  description: string;

  @Prop({required:true})
  categoryId: string;

  @Prop({required:true,})
  userId: string;

}

export const BlogSchema = SchemaFactory.createForClass(Blog);
