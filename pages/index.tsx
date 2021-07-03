import { useEffect, useState } from 'react'

import { getCurrentWeather } from '../services/weather-service'

import { Card } from '../components/Card'
import { Header } from '../components/Header'
import { IWeather } from '../models/weather.model'
import { GlobalStyle } from '../styles'

export default function Home() {
  const [todayWeather, setTodayWeather] = useState<IWeather>({} as IWeather)

  useEffect(() => {
    async function setCurrentWeather() {
      setTodayWeather(await getCurrentWeather())
    }

    setCurrentWeather()
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header/>
      <Card weather={todayWeather} />
    </>
  )
}
