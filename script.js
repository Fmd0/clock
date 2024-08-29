const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

function clock() {
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourDegree = hours * 30 + minutes * 6 /60 -90;
    const minuteDegree = minutes * 6 + seconds * 6 /60 -90;
    const secondDegree = seconds * 6-90;

    hourElement.style.transform = `translate(-16%, -50%) rotate(${hourDegree}deg)`
    minuteElement.style.transform = `translate(-10%, -50%) rotate(${minuteDegree}deg)`
    secondElement.style.transform = `translate(-11.5%, -50%) rotate(${secondDegree}deg)`
}

window.setInterval(clock, 500);
