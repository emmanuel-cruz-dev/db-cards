import { useQuery } from "@tanstack/react-query";
import { characterService } from "../services/characters";

export const useGetCharacters = () => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: characterService.getCharacters,
  });
};

export const useCharacterById = (id) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => characterService.getCharacterById(id),
    enabled: !!id,
  });
};
