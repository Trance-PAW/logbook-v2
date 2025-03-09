import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class InventoryUsage extends Document {
  @Prop({ required: true })
  actividad_academica: string;

  @Prop({ required: true })
  nombre_actividad: string;

  @Prop({ required: true })
  maestro_acargo: string;

  @Prop({ required: true })
  fecha_prestamo: Date;

  @Prop({ required: true })
  fecha_entrega: Date;

  @Prop({ required: true })
  horas: number;

  @Prop({ required: true })
  disponible: boolean;

  @Prop({ required: true })
  student: string;  // Asegúrate de que sea un ObjectId válido
}

export const InventoryUsageSchema = SchemaFactory.createForClass(InventoryUsage);
