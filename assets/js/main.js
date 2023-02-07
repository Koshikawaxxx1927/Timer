document.addEventListener("DOMContentLoaded", () => {
    const $btn = document.querySelector(".btn");
    const $minutes = document.querySelector(".minutes");
    const $seconds = document.querySelector(".seconds");
    let timer;
    $btn.addEventListener("click", () => {
        timer = new SendToTimer($minutes, $seconds, $btn);
        timer.color1 = "red";
        timer.getTimer();
    });
});
