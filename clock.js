function getCurrentTime(){
    const currentTime = new Date().toLocaleTimeString();
    return currentTime;
}

function randomElements(top, left, hue){
    const random = Math.random();

    const topMove = random * top;
    const leftMove = random * left;
    const h = random * hue;
    const s = 50;
    const l = 50;

    return[topMove, leftMove, h, s, l];
}

function renderClock(){
const timeEl = document.querySelector('#time')
timeEl.textContent = getCurrentTime();
const [topOffSet, leftOffSet, hue, saturation, light] = randomElements(100, 80, 360);
timeEl.setAttribute("style", `top: ${topOffSet}%; left: ${leftOffSet}%; color: hsl(${hue}, ${saturation}%, ${light}%)`)
}

renderClock();
setInterval(renderClock, 1000);