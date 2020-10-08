import { Actor } from './actor';

export interface Movie {
  id: number;
  nombre: string;
  tipo: string;
  fecha_estreno: string;
  cantidad_publico: number;
  foto?: string;
  actor?: Actor;
}
