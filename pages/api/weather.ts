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
  console.log(request);
  const { city } = request.body;

  response.send(
    await axios
      .get(`http://${apiURL}weather?q=${city}&appid=${apiKey}`)
      .then((data) => JSON.stringify(data))
      .catch((err) => {
        return { type: "error", message: err.message };
      })
  );
  // try {
  //   return response.send(
  //     await
  //   );
  // } catch (error) {
  //   console.log(error);
  //   return response.send({
  //     type: "error",
  //     message: error.message
  //   });
  // }
};

export default getWeather;
