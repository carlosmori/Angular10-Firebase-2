import { Actor } from './actor';

export interface Movie {
  id: number;
  nombre: string;
  tipo: string;
  fecha_estreno: string;
  movieDocumentId?: string;
  cantidad_publico: number;
  foto?: string;
  actor?: Actor;
  borrado?: number;
}
