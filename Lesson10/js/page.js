const currentURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=fd74cb44a609831d55dcf1e741ec4e9b";
fetch(currentURL)
  .then((response) => response.json())
  
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temp-value').textContent = Math.round((((jsObject.main.temp) - 273.15) * 9/5 + 32)*100)/100;
    document.getElementById('humidity-value').textContent = jsObject.main.humidity;
    document.getElementById('windspeed-value').textContent = jsObject.wind.speed;
});

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=fd74cb44a609831d55dcf1e741ec4e9b";
fetch(apiURL)
  .then((response) => response.json())
  
  .then((jsObject) => {
    console.log(jsObject);
    let day = 1;
    for (let i = 0; i < jsObject.list.length; i++){
      const temp = jsObject.list[i].dt_txt;
    if ((temp).indexOf("18:00:00")> -1){
      document.getElementById("day"+day+"-data").textContent = Math.round((((jsObject.list[i].main.temp) - 273.15) * 9/5 + 32)*100)/100 + "°F";
      day++;
    }
    
    }
});
window.addEventListener('load',(event)=>{
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigation')

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    // To solve the mid resizing issue with responsive class on
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

    /*** Programming Notes **************************************
    Arrow Functions - es6 syntactically compact alternative to a regular function expression
    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    or https://www.w3schools.com/js/js_arrow_function.asp

    classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    */
    /* JS for the footter */
   const lu = document.querySelector("#lastUpdated");
   lu.textContent = document.lastModified;

   const cry = document.querySelector("#copyRightYear");
   cry.textContent = new Date().getFullYear();

   const forecast1 = document.getElementById("day1");
   const forecast2 = document.getElementById("day2");
   const forecast3 = document.getElementById("day3");
   const forecast4 = document.getElementById("day4");
   const forecast5 = document.getElementById("day5"); 
   const bann = document.getElementById("banner");
   const wday = document.querySelector("#weekday");
   if (new Date().getDay() == 0){
    wday.textContent = "Sunday";
    forecast1.innerHTML = "Monday";
    forecast2.innerHTML = "Tuesday";
    forecast3.innerHTML = "Wednesday";
    forecast4.innerHTML = "Thursday";
    forecast5.innerHTML = "Friday";
   } 
   else if (new Date().getDay() == 1){
    wday.textContent = "Monday";
    forecast1.innerHTML = "Tuesday";
    forecast2.innerHTML = "Wednesday";
    forecast3.innerHTML = "Thursday";
    forecast4.innerHTML = "Friday";
    forecast5.innerHTML = "Saturday";
   }
   else if (new Date().getDay() == 2){
    wday.textContent = "Tuesday";
    forecast1.innerHTML = "Wednesday";
    forecast2.innerHTML = "Thursday";
    forecast3.innerHTML = "Friday";
    forecast4.innerHTML = "Saturday";
    forecast5.innerHTML = "Sunday";
   }
   else if (new Date().getDay() == 3){
    wday.textContent = "Wednesday";
    forecast1.innerHTML = "Thursday";
    forecast2.innerHTML = "Friday";
    forecast3.innerHTML = "Saturday";
    forecast4.innerHTML = "Sunday";
    forecast5.innerHTML = "Monday";
   }
   else if (new Date().getDay() == 4){
    wday.textContent = "Thursday";
    forecast1.innerHTML = "Friday";
    forecast2.innerHTML = "Saturday";
    forecast3.innerHTML = "Sunday";
    forecast4.innerHTML = "Monday";
    forecast5.innerHTML = "Tuesday";
   }
   else if (new Date().getDay() == 5){
    wday.textContent = "Friday";
    bann.style.display = "block";
    forecast1.innerHTML = "Saturday";
    forecast2.innerHTML = "Sunday";
    forecast3.innerHTML = "Monday";
    forecast4.innerHTML = "Tuesday";
    forecast5.innerHTML = "Wednesday";
   }
   else {
    wday.textContent = "Saturday";
    forecast1.innerHTML = "Sunday";
    forecast2.innerHTML = "Monday";
    forecast3.innerHTML = "Tuesday";
    forecast4.innerHTML = "Wednesday";
    forecast5.innerHTML = "Thursday";
   }
   

   const mday = document.querySelector("#dayofmonth");
   mday.textContent = new Date().getDate();

   const month = document.querySelector("#month");
   if (new Date().getMonth() == 0){
    month.textContent = "January";
   }
   else if (new Date().getMonth() == 1){
    month.textContent = "February";
   }
   else if (new Date().getMonth() == 2){
    month.textContent = "March";
   }
   else if (new Date().getMonth() == 3){
    month.textContent = "April";
   }
   else if (new Date().getMonth() == 4){
    month.textContent = "May";
   }
   else if (new Date().getMonth() == 5){
    month.textContent = "June";
   }
   else if (new Date().getMonth() == 6){
    month.textContent = "July";
   }
   else if (new Date().getMonth() == 7){
    month.textContent = "August";
   }
   else if (new Date().getMonth() == 8){
    month.textContent = "September";
   }
   else if (new Date().getMonth() == 9){
    month.textContent = "October";
   }
   else if (new Date().getMonth() == 10){
    month.textContent = "November";
   }
   else {month.textContent = "December";}
   


   const year = document.querySelector("#year");
   year.textContent = new Date().getFullYear();
});