import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface LocationDataProps {
    city: string,
    dateLine: string,
    icon?: any
}

export default function LocationData(props: LocationDataProps) {
    return (
        <div className="flex flex-col justify-end mb-10 items-center h-1/2 lg:mb-0 
            lg:justify-between lg:w-1/2
        ">
            <span className="flex flex-col items-center">
                <h3 className="mb-5">{props.city}</h3>
                <h5>{props.dateLine}</h5>
            </span>
            <div className="w-1/2 h-1/2">
                <FontAwesomeIcon icon={props.icon} className="w-full h-full" />

            </div>
        </div>
    )
}