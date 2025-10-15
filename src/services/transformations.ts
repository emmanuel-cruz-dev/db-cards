import { AxiosError } from "axios";
import axios from "./axiosConfig";

const getTransformations = async () => {
  try {
    const response = await axios.get("/api/transformations");
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "[getTransformations] Error fetching transformations:",
      axiosError.response?.data
    );
    throw error;
  }
};

const getTransformationById = async (id: number) => {
  try {
    const response = await axios.get(`/api/transformations/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "[getTransformationById] Error fetching transformation:",
      axiosError.response?.data
    );
    throw error;
  }
};

export const transformationService = {
  getTransformations,
  getTransformationById,
};
