interface WeatherDataProps {
    currentTemp: string,
    desc: string,
    tempMin: string,
    tempMax: string
}

export default function WeatherData(props: WeatherDataProps) {
    return (
        <div className="flex flex-col justify-start mt-10 items-center h-1/2 
            lg:justify-between lg:w-1/2 lg:mt-0 
        ">
            <h1 className="mb-10">{props.currentTemp}</h1>
            <div className="flex flex-col items-center">
                <h3 className="mb-5">{props.desc}</h3>
                <span className="flex justify-around w-full">
                    <p>{props.tempMin} / {props.tempMax}</p>
                </span>
            </div>
        </div>
    )
}