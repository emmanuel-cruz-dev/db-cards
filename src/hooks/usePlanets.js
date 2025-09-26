import { useQuery } from "@tanstack/react-query";
import { planetService } from "../services/planets";

export const useGetPlanets = () => {
  return useQuery({
    queryKey: ["planets"],
    queryFn: planetService.getPlanets,
  });
};

export const usePlanetById = (id) => {
  return useQuery({
    queryKey: ["planet", id],
    queryFn: planetService.getPlanetById(id),
    enabled: !!id,
  });
};
