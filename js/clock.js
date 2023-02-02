const clock = document.querySelector(".clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const getMinutes = String(date.getMinutes()).padStart(2,"0");
    const getSeconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerHTML = `${hours}:${getMinutes}:${getSeconds}`;
}



getClock();
setInterval(getClock, 1000);