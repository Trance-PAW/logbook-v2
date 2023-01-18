import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: string;

  @Prop({ default: null })
  lab: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
