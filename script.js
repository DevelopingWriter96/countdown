

let targetMonth = "September";
let targetDay = "20";
let targetYear = "2024";
let targetTime = "18:45:00";
let targetMessage = "Get ready to head to Cybertron";
let endMessage = "Transform and Roll Out!";

let targetDate = targetMonth + " " + targetDay + " " + targetYear + " " + targetTime;

console.log(targetDate);

const countdownDate = new Date(targetDate).getTime();

const myfunc = setInterval(function() {
    document.getElementById('message').innerHTML = targetMessage;
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;
    
    const days  = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (days == 1) {
    document.getElementById('days').innerHTML = days + " Day,";
    } else {        
    document.getElementById('days').innerHTML = days + " Days,";
    }

    if (hours == 1) {
        document.getElementById('hours').innerHTML = hours + " Hour,";
    } else {
        document.getElementById('hours').innerHTML = hours + " Hours,";
    }

    if (minutes == 1) {
        document.getElementById('mins').innerHTML = minutes + " Minute,";
    } else {
        document.getElementById('mins').innerHTML = minutes + " Minutes,";
    }

    if (seconds == 1) {
        document.getElementById('secs').innerHTML = seconds + " Second";
    } else {
        document.getElementById('secs').innerHTML = seconds + " Seconds";
    }

    if (timeLeft <= 0) {
        document.getElementById('days').innerHTML = "";
        document.getElementById('hours').innerHTML = "";
        document.getElementById('mins').innerHTML = "";
        document.getElementById('secs').innerHTML = "";
        document.getElementById('end').innerHTML = endMessage;
    }
}, 1000)