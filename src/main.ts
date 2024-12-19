import { world, system } from "@minecraft/server";

system.runInterval(() => {
    const currentTime = world.getTimeOfDay();
    const timeOfDay = currentTime / 1000 + 6;   // 12,000が18時、18,000が0時

    // 整数部分を取得
    let hour = Math.floor(timeOfDay);

    // 小数部分を取得
    const minute = Math.floor((timeOfDay - hour) * 60).toString().padStart(2, '0');

    // 24時以降の時刻表示を修正
    if (hour >= 24) {
        hour = hour - 24;
    }

    world.sendMessage(`時刻は ${hour}:${minute} です。`);
    if (11617 <= currentTime && currentTime < 12969) {
        world.sendMessage("もうすぐ夜です。モンスターに気をつけよう！！");
        if (currentTime >= 12517) {
            world.sendMessage("ベッドで寝られる時刻になりました。");
        }
    }
}, 200); // 20 ticks = 1 second