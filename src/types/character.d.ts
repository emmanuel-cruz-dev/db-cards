type CharacterRace =
  | "Saiyan"
  | "Human"
  | "Namekian"
  | "Frieza Race"
  | "Android"
  | "God"
  | "Unknown";

export interface Character {
  id: number;
  name: string;
  gender: string;
  race: CharacterRace;
  affiliation: string;
  description: string;
  image: string;
  ki: string;
  maxKi: string;
}

export type CharacterCardProps = Omit<
  Character,
  "gender" | "affiliation" | "ki" | "maxKi"
> & {
  isLoading?: boolean;
};

export type CharacterDetailsCardProps = {
  character: Character;
  isLoading?: boolean;
};
