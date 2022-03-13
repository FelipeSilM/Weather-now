import LocationData from './LocationData'
import WeatherData from './WeatherData'

interface LayoutProps {
    city:string,
    dateLine:string,
    icon?:any,
    currentTemp: string,
    desc: string,
    tempMin: string,
    tempMax: string,
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col justify-evenly lg:justify-center items-center h-screen lg:flex-row
            bg-gradient-to-b from-japanese-indigo to-blue 
        `}>
            <LocationData city={props.city} dateLine={props.dateLine} icon={props.icon}/>
            <WeatherData currentTemp={props.currentTemp} desc={props.desc} tempMin={props.tempMin} tempMax={props.tempMax}/>
            
        </div>
    )
}