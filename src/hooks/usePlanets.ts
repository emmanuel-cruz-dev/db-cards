import { useQuery } from "@tanstack/react-query";
import { planetService } from "../services/planets";

export const useGetPlanets = (page: number) => {
  return useQuery({
    queryKey: ["planets", page],
    queryFn: () => planetService.getPlanets(page),
  });
};

export const usePlanetById = (id: string) => {
  return useQuery({
    queryKey: ["planet", id],
    queryFn: () => planetService.getPlanetById(id),
    enabled: !!id,
  });
};
