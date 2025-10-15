import { useQuery } from "@tanstack/react-query";
import { transformationService } from "../services/transformations";
import { TransformationProps } from "../types/transformation";

export const useGetTransformations = () => {
  return useQuery<TransformationProps[]>({
    queryKey: ["transformations"],
    queryFn: transformationService.getTransformations,
  });
};

export const useTransformationById = (id: number) => {
  return useQuery({
    queryKey: ["transformation", id],
    queryFn: () => transformationService.getTransformationById(id),
    enabled: !!id,
  });
};
