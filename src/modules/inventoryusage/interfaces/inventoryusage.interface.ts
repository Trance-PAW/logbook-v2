export interface InventoryUsage {
    id?: string;
    actividad_academica: string;
    nombre_actividad: string;
    maestro_acargo: string;
    fecha_prestamo: Date;
    fecha_entrega: Date;
    horas: number;
    disponible: boolean;
    student: string; // Se mantiene como string para almacenar ObjectId de MongoDB
  }
  