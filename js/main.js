const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
var waetherT=[]; 
var forecastday=[]; 
var day=[]; 
var tempmin=[] 
var condition=[] 
 
async function weather(){ 
 
let weatherData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=771b6147fd83407898641641230708&q=cairo&days=3`); 
let finalReslut = await weatherData.json(); 
console.log(finalReslut) 
// var city=finalReslut.location.name 
// document.getElementById('title').innerHTML=city 
 
forecastday = finalReslut.forecast.forecastday 
 
 
display() 
 
 
} 
 
function display(){ 
  let temp = "" 
   
forecastday.forEach((el)=>{ 
   let daate= new Date(el.date); 
  let  day  = weekday[daate.getDay()] 
  temp+=`<div class="content1 content2 "> 
  <div class="title text-center"> 
    <h6 id="day2">${day}</h6> 
  </div> 
  <div class="con text-center"> 
      
      <img src="https://${el.day.condition.icon}" alt=""id="img2" > 
      <p class="fs-2" id="temp2">${el.day.maxtemp_c}</p> 
      <p class="fs-6"id="tempmin2">${el.day.mintemp_c}</p> 
      <span id="con2">${el.day.condition.text}</span> 
       
  </div> 
</div>` 
}) 
 document.getElementById("myData").innerHTML = temp  
} 
// console.log(waetherT) 
 
weather()