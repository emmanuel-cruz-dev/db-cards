import { useQuery } from "@tanstack/react-query";
import { transformationService } from "../services/transformations";

export const useGetTransformations = () => {
  return useQuery({
    queryKey: ["transformations"],
    queryFn: transformationService.getTransformations,
  });
};

export const useTransformationById = (id) => {
  return useQuery({
    queryKey: ["transformation", id],
    queryFn: transformationService.getTransformationById(id),
    enabled: !!id,
  });
};
