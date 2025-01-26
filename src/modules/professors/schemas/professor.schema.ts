import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProfessorDocument = HydratedDocument<Professor>;

@Schema()
export class Professor {

  @Prop({ required: true })
  name: string;
}

export const ProfessorSchema = SchemaFactory.createForClass(Professor);
