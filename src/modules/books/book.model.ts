// src/modules/books/book.model.ts
// src/modules/books/book.model.ts
import { ObjectId } from 'mongodb';

export interface Book {
  _Id?: ObjectId;
  Nombre: string;
  Tipo: string;
  TituloIngles: string;
  Autor: string;
  Descripcion: string;
  FechaPublicacion: string;
  Paginas: number;
  ISBN: string;
  Tapa: 'Dura' | 'Blanda';
  Formato: 'Fisico' | 'Virtual';
  ImagenUrl?: string;      
  Genero?: string[];        
  Rating?: number;
  Estado?: 'Pendiente' | 'Leyendo' | 'Terminado';
  Idioma?: string;
}
  