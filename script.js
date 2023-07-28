// for setInterval
var interval;

//42 Timer Title
var title = document.getElementById("title");

// minutes and seconds
var min = document.getElementById("minute")
var sec = document.getElementById("second")
var hour = document.getElementById("hour");

// selected minutes and seconds
var s_min = document.getElementById("s_minute");
var s_sec = document.getElementById("s_second");
var s_hour = document.getElementById("s_hour");

// buttons
var btn_start = document.getElementById("start");
var btn_reset = document.getElementById("reset");

//prevents screen from sleeping
navigator.wakeLock.request('screen');


s_hour.addEventListener("change", () =>{
    hour.textContent = String(s_hour.value).slice(-2).padStart(2,"0");
    if(s_hour.value >= 24)
        hour.textContent = "23";
    s_hour.value = hour.textContent;
});

s_min.addEventListener("change", () =>{
    min.textContent = String(s_min.value).slice(-2).padStart(2,"0");
    if(s_min.value >= 60)
        min.textContent = "59";
    s_min.value = min.textContent;
});

s_sec.addEventListener("change", () =>{
    sec.textContent = String(s_sec.value).slice(-2).padStart(2,"0");   
    if(s_sec.value >= 60)
        sec.textContent = "59";
    s_sec.value = sec.textContent;
});

btn_start.addEventListener("click", startTimer);
btn_reset.addEventListener("click", resetTimer);

//Timer
function startTimer() {
    title.style.color = "#993131";
    var totalSeconds = parseInt(hour.textContent) * 3600 + parseInt(min.textContent) * 60 + parseInt(sec.textContent);
    interval = setInterval(function () {
        if (totalSeconds <= 0) {
            clearInterval(interval);
            hour.textContent = "00";
            min.textContent = "00";
            sec.textContent = "00";
            title.style.color = "#333";
            return;
        }

        var hours = Math.floor(totalSeconds / 3600);
        var minutes = Math.floor((totalSeconds % 3600) / 60);
        var seconds = totalSeconds % 60;

        hour.textContent = hours < 10 ? "0" + hours : hours;
        min.textContent = minutes < 10 ? "0" + minutes : minutes;
        sec.textContent = seconds < 10 ? "0" + seconds : seconds;

        totalSeconds--;
    }, 1000);
}

//Time reset
function resetTimer() {
    clearInterval(interval);
    s_hour.value = "00";
    s_min.value = "00";
    s_sec.value = "00";
    hour.textContent = "00";
    min.textContent = "00";
    sec.textContent = "00";
    title.style.color = "#333";
}
