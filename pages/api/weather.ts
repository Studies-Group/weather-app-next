import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const apiURL = process.env.API_URL;
const apiKey = process.env.API_KEY;

export const getWeather = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { city } = request.body;

  const data = await axios
    .get(`https://${apiURL}weather?q=${city}&appid=${apiKey}&units=metric`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return { type: "error", message: err.message };
    });

  response.json(data);
};

export default getWeather;
