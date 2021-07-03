import { FC } from 'react'
import { CustomCard, WeatherIcon } from './styles'

export interface CardProps {
  weather: {
    main: string
    description: string
    temp: number
    feelsLike: number
    tempMin: number
    tempMax: number
    humidity: number
    icon: string
  },
}

/* TODO: verify the error [Warning: Prop className did not match.] */
export const Card: FC<CardProps> = ({ weather }) => {
  const {
    main,
    description,
    temp,
    feelsLike,
    tempMin,
    tempMax,
    humidity,
    icon
  } = weather

  return (
    <CustomCard weather={weather}>
      <h2>{main}</h2>
      <h3>Temperature: {temp}ºC</h3>
      <WeatherIcon icon={icon} />
      <div className="details">
        <p>Feels like: {feelsLike}ºC</p>
        <div className="max-and-min-container">
          <p>Max:{tempMax}ºC</p>
          <p>Min:{tempMin}ºC</p>
        </div>
      </div>
    </CustomCard>
  )
}
