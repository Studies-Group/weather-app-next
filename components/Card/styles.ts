import styled from "styled-components";
import { CardProps } from ".";
import { Colors } from "../../styles";

const IMAGE_URL = "http://openweathermap.org/img/wn/";

export const CustomCard = styled.div<CardProps>`
  background-color: ${Colors.grey};
  border-radius: 10px;
  padding: 5px 10px;
  width: 300px;
  margin: 0 30px;

  h2 {
    padding: 10px;
    font-size: 20px;
  }

  .details {
    display: flex;
    justify-content: space-between;
    p:not(.max-and-min-container p) {
      font-size: 15px;
      margin-bottom: auto;
    }
    p:not(.max-and-min-container p),
    .max-and-min-container {
      width: 45%;
      p {
        margin-top: auto;
        margin-left: auto;
        font-size: 12px;
      }
    }
  }
`;

export const WeatherIcon = styled.img<{ icon: string }>`
  width: 50px;
  height: 50px;
  background-color: grey;
  background-image: url("${IMAGE_URL}${({ icon }) => icon || ""}@2x.png");
`;
