document.querySelector('button').addEventListener('click',getWeather)

async function getWeather(){
    let city= document.querySelector('input').value.trim() 
    const apiKey ="227034bc4b01eca7d4446657264691bf"
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    const res=await fetch(url) 
    .then(res=>res.json())
    .then(data=>{
        document.querySelector(".result").innerHTML=`<div>
          <h3>${data.name}</h3>
          <h3>${data.main.temp}</h3>
        </div>`
       
    })

    .catch(error => {
        console.log('Error fetching weather data:', error);
    });
}
