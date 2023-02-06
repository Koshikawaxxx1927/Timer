document.addEventListener("DOMContentLoaded", () => {
    let $meter = document.querySelector(".time-meter");
    let count = 0;
    setInterval(() => {
        let degree = count / 100;
        $meter.style.background = `conic-gradient(aqua ${degree}deg, white ${degree}deg)`;
        count++;
        console.log(count);
    }, 1);
});
