import axios from "./axiosConfig";

const getCharacters = async () => {
  try {
    const response = await axios.get("/api/characters?limit=12");
    return response.data;
  } catch (error) {
    const axiosError = error;
    console.error(
      "[getCharacters] Error fetching characters:",
      axiosError.response.data
    );
  }
};

const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`/api/characters/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error;
    console.error(
      "[getCharacterById] Error fetching character:",
      axiosError.response.data
    );
  }
};

export const characterService = { getCharacters, getCharacterById };
