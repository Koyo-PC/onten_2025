'use strict';

// 開始日時と終了日時
const targetDate = new Date(2025, 8, 23, 9, 0, 0); 
const endDate   = new Date(2025, 8, 23, 15, 0, 0); 

function countdown(){
    const now = new Date();
    const toStart = targetDate.getTime() - now.getTime();
    const toEnd   = endDate.getTime() - now.getTime();

    let distance; 
    if (toStart > 0) {
        // 開始前
        document.getElementById("countdown-text").textContent = "開催まで";
        distance = toStart;
    } else if (toEnd > 0) {
        // 開催中 → 終了までのカウント
        document.getElementById("countdown-text").textContent = "終了まで";
        distance = toEnd;
    } else {
        // 終了後
        document.getElementById("countdown-text").textContent = "音展終了！！";
        document.querySelector(".day").textContent  = "0";
        document.querySelector(".hour").textContent = "00";
        document.querySelector(".min").textContent  = "00";
        document.querySelector(".sec").textContent  = "00";
        return;
    }

    const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".day").textContent  = days;
    document.querySelector(".hour").textContent = hours.toString().padStart(2,"0");
    document.querySelector(".min").textContent  = minutes.toString().padStart(2,"0");
    document.querySelector(".sec").textContent  = seconds.toString().padStart(2,"0");

    // 円グラフ割合更新
    document.querySelector(".day-circle").style.setProperty("--value", (days / 60) * 100);
    document.querySelector(".hour-circle").style.setProperty("--value", (hours / 24) * 100);
    document.querySelector(".min-circle").style.setProperty("--value", (minutes / 60) * 100);
    document.querySelector(".sec-circle").style.setProperty("--value", (seconds / 60) * 100);
}

setInterval(countdown, 500);