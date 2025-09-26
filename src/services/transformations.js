import axios from "./axiosConfig";

const getTransformations = async () => {
  try {
    const response = await axios.get("/api/transformations");
    return response.data;
  } catch (error) {
    const axiosError = error;
    console.error(
      "[getTransformations] Error fetching transformations:",
      axiosError.response.data
    );
  }
};

const getTransformationById = async (id) => {
  try {
    const response = await axios.get(`/api/transformations/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error;
    console.error(
      "[getTransformationById] Error fetching transformation:",
      axiosError.response.data
    );
  }
};

export const transformationService = {
  getTransformations,
  getTransformationById,
};
