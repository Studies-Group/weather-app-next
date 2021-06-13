import { FC } from "react";

interface CardProps {
  weather: {
    main: string;
    description: string;
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    humidity: number;
  };
}

const Card: FC<CardProps> = () => {
  return (
    <div>
      <h2>Temperature</h2>
    </div>
  );
};

export default Card;
