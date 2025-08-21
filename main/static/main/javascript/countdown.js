'use strict';

const targetDate = new Date(2025, 8, 23, 9, 0, 0); // 9月23日9時
const endgetDate = new Date(2025, 8, 23, 16, 0, 0);

// イベントまでの総日数を基準に円を動かすために初期値計算
const totalDays = Math.floor((targetDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

function countdown(){
    const now = new Date();
    const distance = targetDate.getTime() - now.getTime();
    const span = endgetDate.getTime() - now.getTime();

    const calsday = Math.floor(distance / (1000 * 60 * 60 * 24));
    const calshours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const calsminutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const calsseconds = Math.floor((distance % (1000 * 60)) / 1000);

    const sec = calsseconds < 10 ? '0' + calsseconds : calsseconds;
    const min = calsminutes < 10 ? '0' + calsminutes : calsminutes;
    const hour = calshours < 10 ? '0' + calshours : calshours;
    const day = calsday;

    if (distance >= 0) {
        // 数字更新
        document.querySelector(".day").textContent = day;
        document.querySelector(".hour").textContent = hour;
        document.querySelector(".min").textContent = min;
        document.querySelector(".sec").textContent = sec;

        // 円グラフ割合更新
        document.querySelector(".day-circle").style.setProperty("--value", (calsday / 60) * 100);
        document.querySelector(".hour-circle").style.setProperty("--value", (calshours / 24) * 100);
        document.querySelector(".min-circle").style.setProperty("--value", (calsminutes / 60) * 100);
        document.querySelector(".sec-circle").style.setProperty("--value", (calsseconds / 60) * 100);

    } else if (span >= 0) {
        document.querySelector(".home_hour").textContent = "音展当日！！";
        document.getElementById("theday").id = "toujitu";
        document.getElementById("yesterday").id = "zenjitu";
    } else {
        document.querySelector(".home_hour").textContent = "音展終了！！";
    }
}

setInterval(countdown, 500);