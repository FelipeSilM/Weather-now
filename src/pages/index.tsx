import {GetStaticProps } from "next"
import Layout from "../components/templates/Layout"
import moment from "moment"
import FormatedDate from "../model/formatedDate"

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch
  ('https://apiprevmet3.inmet.gov.br/previsao/3550308')
  const forecast = await data.json()
  const spForecast = await forecast[3550308]

  //getting formated dates
  const dates = new FormatedDate().nextFirstDay
  const currentDate = dates.currentDate
  const nextDays = dates.nextFirstDay

  return {
    props: {
      dates
    }
  }
}

export default function Home(props) {

  const currentForecast = {
    description: "Ensolarado",
    temp: "10°",
    day: "Sabado",
    minTemp: "10",
    maxTemp: "22"
  }
  return (
    <>
      <Layout city="São Paulo" currentForecast={currentForecast} ></Layout>
      {console.log(props.dates)}
    </>
  )
}
