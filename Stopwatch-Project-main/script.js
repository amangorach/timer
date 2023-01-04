let [milliseconds, seconds, minutes] = [0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;
// I was having problem here
// I tried it with other keys thats why it for down arrow
if (keyCode === DOWN_ARROW){
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
};

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes] = [0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 ";
}); 

function displayTimer() {
    milliseconds += 1;
    if(milliseconds == 100) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }

    
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 1
        ? "00" + milliseconds
        : milliseconds < 10
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${m} : ${s} : ${ms}`;

}