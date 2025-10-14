import { AxiosError } from "axios";
import axios from "./axiosConfig";

const getPlanets = async (page: number) => {
  try {
    const response = await axios.get(`/api/planets?page=${page}&limit=9`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "[getPlanets] Error fetching planets:",
      axiosError.response?.data
    );
    throw error;
  }
};

const getPlanetById = async (id: string) => {
  try {
    const response = await axios.get(`/api/planets/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "[getPlanetById] Error fetching planet:",
      axiosError.response?.data
    );
    throw error;
  }
};

export const planetService = { getPlanets, getPlanetById };
