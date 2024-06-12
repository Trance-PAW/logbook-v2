import { Schema, Document } from 'mongoose';

export const InventorySchema = new Schema({
  pertenece: String,
  fondo: String,
  unidad_presupuestal: String,
  cuenta: String,
  subcuenta: String,
  folio: String,
  codigo: String,
  cant: Number,
  descripcion: String,
  modelo: String,
  serie_de_fabrica: String,
  ubicacion: String,
  responsable: String,
  num_de_emp: String,
  observaciones: String,
});

export interface Inventory extends Document {
  pertenece: string;
  fondo: string;
  unidad_presupuestal: string;
  cuenta: string;
  subcuenta: string;
  folio: string;
  codigo: string;
  cant: number;
  descripcion: string;
  modelo: string;
  serie_de_fabrica: string;
  ubicacion: string;
  responsable: string;
  num_de_emp: string;
  observaciones: string;
}
