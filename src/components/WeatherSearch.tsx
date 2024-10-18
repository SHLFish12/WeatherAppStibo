import CurrentWeather from "./CurrentWeather";
import React, {useState, useEffect, useRef, useContext} from 'react'


interface myWeather {
    status: boolean,
    location: string,
    temperature: number,
    description: string,
    iconref: string,
}

function WeatherSearch(){
    const apikey: string = 'ab627a4f2069f98b00a728c3d2280662';
    const [city, setCity] = useState<string>('');
    const [tempcity, setTempCity] = useState<string>('');
    const [data, setData] = useState<myWeather>({   "status": false, 
                                                    "location": "", 
                                                    "temperature": 0, 
                                                    "description": "No data", 
                                                    "iconref": "" });
    const inputRef = useRef<HTMLInputElement>(null)

    
    useEffect( () => {
        const url: string = `https://api.weatherstack.com/current?access_key=${apikey}&query=${city}`
        const options = {
            method: 'GET'
        };
        const fetchWeather = async () => {
            const response = await fetch(url, options);
            if(response.ok){
                const tempdata = await (response.json());
                setData({   "status": true, 
                            "location": tempdata.location.name, 
                            "temperature": tempdata.current.temperature, 
                            "description": tempdata.current.weather_descriptions, 
                            "iconref":  tempdata.current.weather_icons[0]});
            }
        }

        if(city !== "") fetchWeather();
    }, [city]);
    
    function handleClick(){
        if(tempcity == ""){
            inputRef.current?.focus();
            return;
        }
        
        setCity(tempcity);
        setTempCity("");
    }

    return(
        <div className="WeatherSearch">
            <input
                type = "text"
                ref = {inputRef}
                value = {tempcity}
                placeholder="Enter City"
                onChange={(e) => setTempCity(e.target.value)}
            />
            <button className="SearchButton" onClick={handleClick}> Search</button>

            <div className="CurrentWeather">
                <p> {data.location == "" ? "Please enter city above" : "Weather in " + data.location} </p>
                <ul>
                    <li>Weather: {data.description} <img className="WeatherIcon" src={data.iconref}/></li>
                    <li>Temperature: {data.temperature}°C</li>
                </ul>
            </div>

        </div>
    );
}

export default WeatherSearch