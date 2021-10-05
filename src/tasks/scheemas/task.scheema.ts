import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type taskDocument = task & Document;

@Schema()
export class task {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(task);
