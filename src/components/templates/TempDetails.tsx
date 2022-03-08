interface TempDetailsProps {
    day?: string,
    minTemp?: string,
    maxTemp?: string,
    season?: string,
    maxMoisture?: string,
    minMoisure?: string,
    winds?: string,
}

export default function TempDetails(props: TempDetailsProps) {
    return (
        <div className="mb-8">
            <span className="flex w-full">
                <p>{props.day}</p>
                <p className="grow ml-4">Hoje</p>
                <p>{props.minTemp}°C</p>
                <p className="ml-4">{props.maxTemp}°C</p>
            </span>
            <hr/>
            <div className="flex justify-between my-2">
                <span>
                    <p>{props.season}</p>
                    <p>{props.minMoisure}</p>
                </span>
                <span>
                    <p>{props.winds}</p>
                    <p>{props.maxMoisture}</p>
                </span>
            </div>
            <hr/>
        </div>
    )
}