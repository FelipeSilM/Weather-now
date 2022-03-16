import Layout from "../components/templates/Layout"
import { GetStaticProps } from "next";
import { dateBuilder, getIcon } from '../components/apiManegements'


import { useState } from "react";
import { useEffect } from "react";

const api = {
  key: "2d430705df3eb5fe1c551cace54e0b81",
  base: "https://api.openweathermap.org/data/2.5/",
  city: "São Paulo",
  lang: "pt_br",
  units: "metric"
}

export const getStaticProps: GetStaticProps = async () => {

  const hour = 60 * 60
  const data = await fetch(`${api.base}weather?q=${api.city}&lang=${api.lang}&units=${api.units}&appid=${api.key}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`http error: status ${response.status}`)
      }
      return response.json();
    })
    .catch(error => {
      return error.message
    })

  return {

    props: {
      data
    },
    revalidate : hour
  }

}

export default function Home({ data }) {

  const [datas, setDatas] = useState({
    city: "São Paulo, BR",
    dateLine: "Sábado, 1 janeiro 2022",
    icon: getIcon(),
    description: "descrição",
    temp: `0°C`,
    day: "Sabado",
    minTemp: `0°C`,
    maxTemp: `0°C`
  })

  useEffect(() => {
    if (typeof data === 'object') {
      const now = new Date()

      setDatas({
        city: `${data.name}, ${data.sys.country}`,
        dateLine: dateBuilder(now),
        icon: getIcon(data.weather[0].icon),
        description: data.weather[0].description,
        temp: `${Math.round(data.main.temp)}°C`,
        day: "Sabado",
        minTemp: `${Math.round(data.main.temp_min)}°C `,
        maxTemp: ` ${Math.round(data.main.temp_max)}°C`
      })
    } else if (typeof data === 'string') {
      alert(data)
    }

  }, [])

  return (
    <>
      <Layout city={datas.city} dateLine={datas.dateLine} icon={datas.icon}
        currentTemp={datas.temp} desc={datas.description} tempMin={datas.minTemp} tempMax={datas.maxTemp}
      ></Layout>
      {console.log(data)}
    </>
  )
}
