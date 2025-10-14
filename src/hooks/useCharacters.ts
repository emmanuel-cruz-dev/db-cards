import { useQuery } from "@tanstack/react-query";
import { characterService } from "../services/characters";

export const useGetCharacters = (page: number) => {
  return useQuery({
    queryKey: ["characters", page],
    queryFn: () => characterService.getCharacters(page),
  });
};

export const useCharacterById = (id: string) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => characterService.getCharacterById(id),
    enabled: !!id,
  });
};
