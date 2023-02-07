document.addEventListener("DOMContentLoaded", () => {
    const $btn = document.querySelector(".btn");
    const $minutes = document.querySelector(".minutes");
    const $seconds = document.querySelector(".seconds");
    const $counter = document.querySelector(".timer-title");
    let timer;
    let st;
    $btn.addEventListener("click", () => {
        timer = new SendToTimer($minutes, $seconds, $btn);
        // timer.color1 = "red";
        timer.getTimer();
    });
});
