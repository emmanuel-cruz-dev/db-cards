import axios from "./axiosConfig";

const getPlanets = async () => {
  try {
    const response = await axios.get("/api/planets");
    return response.data;
  } catch (error) {
    const axiosError = error;
    console.error(
      "[getPlanets] Error fetching planets:",
      axiosError.response.data
    );
  }
};

const getPlanetById = async (id) => {
  try {
    const response = await axios.get(`/api/planets/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error;
    console.error(
      "[getPlanetById] Error fetching planet:",
      axiosError.response.data
    );
  }
};

export const planetService = { getPlanets, getPlanetById };
