import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingPendienteService {

  canastabasica = [
    'Panes y Tortillas',
    'Arroces, cereales, harinas y pastas alimenticias',
    'Leche de vaca y quesos y derivados',
    'Carnes de res, frescas o congelada',
    'Carnes de Cerdo, frescas o congeladas',
    'Pollo, Gallina o Gallo, frescas',
    'Productos Cárnicos Embutidos',
    'Atunes enlatados, pescados frescos o congelados',
    'Aceites, margarinas y otras grasas',
    'Frutas frescas, refrigeradas o congeladas, sin ninguna preparación',
    'Productos alimenticios',
    'Productos para preparar bebidas diversas',
    'Artículos para higiene, limpieza personal y para el cuidado del Hogar',
    'Bienes escolares',
    'Insumos'
  ]

  constructor() { }
}
