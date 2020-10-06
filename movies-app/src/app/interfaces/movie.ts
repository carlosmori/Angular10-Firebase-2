import { StringLiteral } from 'typescript';

export interface Movie {
  id: number;
  nombre: string;
  tipo: string;
  fecha_estreno: string;
  cantidad_publico: number;
  foto: string;
}
