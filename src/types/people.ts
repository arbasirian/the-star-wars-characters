export interface AllPeopleData {
  edges: {
    node: {
      id: string;
    };
  }[];
  pageInfo: {
    endCursor: string;
    startCursor: string;
  };
  totalCount: number;
  people: PeopleModel[];
}
export interface PeopleModel {
  name: string;
  birthYear: string;
  gender: 'male' | 'female' | 'n/a';
  homeworld: PlanetModel;
  species: SpeciesModel;
  id: string;
}

export interface PlanetModel {
  name: string;
  diameter: number;
  rotationPeriod: number;
  orbitalPeriod: number;
  gravity: string;
  population: number;
  climates: string[];
  terrains: string[];
  surfaceWater: number;
  created: string;
  edited: string;
  id: string;
}

export interface SpeciesModel {
  name: string;
  classification: string;
  designation: string;
  averageHeight: number;
  averageLifespan: number;
  eyeColors: string[];
  hairColors: string[];
  skinColors: string[];
  language: string;
  homeworld: PlanetModel;
  edited: string;
  id: string;
}
