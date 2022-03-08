interface currentTempProps {
    city: string,
    description: string,
    temp: string
}

export default function CurrentTemp(props: currentTempProps) {
    return (
        <div className="flex flex-col items-center h-60 md:w-2/5">
            <span className="">
                <h3 className="text-4xl md: text-6xl pb-2">{props.city}</h3>
                <p className=" w-full text-center">{props.description}</p>
            </span>
                <h2 className="text-8xl md:text-9xl text-center">{props.temp}</h2>
        </div>
    )
}