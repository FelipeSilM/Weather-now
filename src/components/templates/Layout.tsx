import CurrentTemp from './CurrentTemp'
import TempDetails from './TempDetails'
import WeekForecast from './WeekForecast'

interface LayoutProps {
    city: string,
    currentForecast: {
        description: string,
        temp: string,
        day?: string,
        minTemp?: string,
        maxTemp?: string,
        season?: string,
        maxMoisture?: string,
        minMoisure?: string,
        winds?: string,
    },
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col md:flex-row justify-center items-center h-screen
            bg-gradient-to-b from-japanese-indigo to-blue 
        `}>
            <CurrentTemp city={props.city} description={props.currentForecast.description}
                temp={props.currentForecast.temp}></CurrentTemp>
            <div className='w-screen px-8 md:w-3/5'>

                <TempDetails day={props.currentForecast.day} minTemp={props.currentForecast.minTemp} maxTemp={props.currentForecast.maxTemp}
                    season={props.currentForecast.day} maxMoisture={props.currentForecast.day} minMoisure={props.currentForecast.day} winds={props.currentForecast.day}
                ></TempDetails>
                <WeekForecast></WeekForecast>
            </div>
        </div>
    )
}