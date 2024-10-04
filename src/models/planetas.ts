export interface Planeta {
  id?: string; // O ID pode ser opcional na criação
  name: string;
  climate: string;
  orbital_period: number;
  rotation_period: number;
  diameter: number;
  terrain: string;
  gravity: string;
  residents: string[];
  films: string[];
  population: number;
  created?: Date; // Opcional se não for usado na criação
  edited?: Date; // Opcional se não for usado na criação
  url?: string; // Opcional se não for usado na criação
  description: string; // incluir descrição

}





