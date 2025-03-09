import { Transform } from 'class-transformer';
import { IsDate, IsString, IsBoolean, IsNumber, IsMongoId } from 'class-validator';

export class CreateInventoryUsageDto {
  @IsString()
  actividad_academica: string;

  @IsString()
  nombre_actividad: string;

  @IsString()
  maestro_acargo: string;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  fecha_prestamo: Date;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  fecha_entrega: Date;

  @IsNumber()
  horas: number;

  @IsBoolean()
  disponible: boolean;

  @IsMongoId()
  student: string;
}
