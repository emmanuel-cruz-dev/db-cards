import { Character } from "./character";

export interface Planet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  characters: Character[];
}

export interface PlanetCardProps {
  planet: Planet;
  isLoading?: boolean;
}

export interface PlanetDetailsCardProps {
  planet: Planet;
  isLoading?: boolean;
}
