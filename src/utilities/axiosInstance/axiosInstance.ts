import axios from "axios";


const openWeatherApi=axios.create({
    baseURL:"https://api.openweathermap.org/",
    headers:{
        accept:"application/json"
    }
})

export default openWeatherApi;