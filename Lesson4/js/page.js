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

   const wday = document.querySelector("#weekday");
   if (new Date().getDay() == 0){
    wday.textContent = "Sunday";
   } 
   else if (new Date().getDay() == 1){
    wday.textContent = "Monday";
   }
   else if (new Date().getDay() == 2){
    wday.textContent = "Tuesday";
   }
   else if (new Date().getDay() == 3){
    wday.textContent = "Wednesday";
   }
   else if (new Date().getDay() == 4){
    wday.textContent = "Thursday";
   }
   else if (new Date().getDay() == 5){
    wday.textContent = "Friday";
   }
   else {
    wday.textContent = "Saturday";
   }
   

   const mday = document.querySelector("#dayofmonth");
   mday.textContent = new Date().getDate();

   const month = document.querySelector("#month");
   if (new Date().getMonth() == 1){
    month.textContent = "January";
   }
   else if (new Date().getMonth() == 2){
    month.textContent = "February";
   }
   else if (new Date().getMonth() == 3){
    month.textContent = "March";
   }
   else if (new Date().getMonth() == 4){
    month.textContent = "April";
   }
   else if (new Date().getMonth() == 5){
    month.textContent = "May";
   }
   else if (new Date().getMonth() == 6){
    month.textContent = "June";
   }
   else if (new Date().getMonth() == 7){
    month.textContent = "July";
   }
   else if (new Date().getMonth() == 8){
    month.textContent = "August";
   }
   else if (new Date().getMonth() == 9){
    month.textContent = "September";
   }
   else if (new Date().getMonth() == 10){
    month.textContent = "October";
   }
   else if (new Date().getMonth() == 11){
    month.textContent = "November";
   }
   else {month.textContent = "December";}
   


   const year = document.querySelector("#year");
   year.textContent = new Date().getFullYear();
});