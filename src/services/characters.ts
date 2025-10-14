import { AxiosError } from "axios";
import axios from "./axiosConfig";

const getCharacters = async (page: number) => {
  try {
    const response = await axios.get(`/api/characters?page=${page}&limit=9`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "[getCharacters] Error fetching characters:",
      axiosError.response?.data
    );
    throw error;
  }
};

const getCharacterById = async (id: string) => {
  try {
    const response = await axios.get(`/api/characters/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "[getCharacterById] Error fetching character:",
      axiosError.response?.data
    );
    throw error;
  }
};

export const characterService = { getCharacters, getCharacterById };
