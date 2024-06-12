import { IsString, IsNumber } from 'class-validator';

export class UpdateInventoryItemDto {
  @IsString()
  pertenece: string;

  @IsString()
  fondo: string;

  @IsString()
  unidad_presupuestal: string;

  @IsString()
  cuenta: string;

  @IsString()
  subcuenta: string;

  @IsString()
  folio: string;

  @IsString()
  codigo: string;

  @IsNumber()
  cant: number;

  @IsString()
  descripcion: string;

  @IsString()
  modelo: string;

  @IsString()
  serie_de_fabrica: string;

  @IsString()
  ubicacion: string;

  @IsString()
  responsable: string;

  @IsString()
  num_de_emp: string;

  @IsString()
  observaciones: string;
}
