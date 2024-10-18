import WeatherSearch from "./components/WeatherSearch";


function WeatherApp() {
  return (
    <div className="WeatherApp">
      <h1> Weather App </h1>
      <WeatherSearch />
      <footer> 
        This website is made 18-10-2024 by Sofus lyhne in preparation for internship interview at Stibo Systems <br/>
        Email: <a href="sofus.h.lyhne@gmail.com">sofus.h.lyhne@gmail.com</a>
      </footer>
    </div>
  );
}

export default WeatherApp;
