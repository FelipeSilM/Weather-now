import {
    faSun, faMoon, faCloudSun, faCloudMoon,
    faCloud, faCloudRain, faCloudShowersHeavy, faSnowflake, faWind
} from "@fortawesome/free-solid-svg-icons";

const api = {
    key: "2d430705df3eb5fe1c551cace54e0b81",
    base: "https://api.openweathermap.org/data/2.5/",
    city: "São Paulo",
    lang: "pt_br",
    units: "metric"
}

export function requestPerCity(city) {
    fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&appid=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(console.log)
}

export function dateBuilder(d): string {
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let day = days[d.getDay()]; //getDay: 0-6
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}

export function getIcon(icon: string = "default") {

    switch (icon) {
        case "01d":
            return faSun
        case "01n":
            return faMoon
        case "02d":
        case "03d":
            return faCloudSun
        case "02n":
        case "03n":
            return faCloudMoon
        case "04d":
        case "04n":
            return faCloud
        case "09d":
        case "09n":
            return faCloudRain
        case "10d":
        case "10n":
        case "11d":
        case "11n":
            return faCloudShowersHeavy
        case "13d":
        case "13n":
            return faSnowflake
        case "50d":
        case "50n":
            return faWind
        default:
            return faCloud
    }
}