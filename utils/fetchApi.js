import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": '73b1cad459mshd60ca37688aca70p16f3f7jsn4c3fb60b801a',
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
