async function fetchWeatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fdcd11c5616bf4cc30df9b8c35a7683f`
	const response =await fetch(url)
	const data = await response.json();
	let city =document.getElementById("city");
	city.innerHTML=data.name;
	let windspeed =document.getElementById("wind_speed");
	windspeed.innerHTML=data.wind.speed+"km/hr";
	let humidity=document.getElementById("humidity");
	humidity.innerHTML=data.main.humidity+" g/kg";
	let temp =document.getElementById("temp");
	temp.innerHTML=Math.round((data.main.temp)-273.15)+"°C";
	console.log(data)
}
    
//demo()
function fetchCity(){
	let cityName= document.getElementById("city_name");
	if(cityName.value===""){
		alert("Enter a city name");
	}else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}
