window.addEventListener('load',(event)=>{
    var wspeed = document.getElementById("windspeed-value");
    var temp = document.getElementById("temp-value");
    var wchill = document.getElementById("windchill-value");

    if (temp.innerHTML <= 50 && wspeed.innerHTML >= 3.0){
    wchill.innerHTML = Math.round(35.74 + 0.6215 * temp.innerHTML - 35.75 * wspeed.innerHTML ** 0.16 + 0.4275 * temp.innerHTML * wspeed.innerHTML ** 0.16);
    }
    else{
        wchill.innerHTML = 'N/A'
    }
});