#! /user/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
    return new Promise((abc) => {
        setTimeout(abc, 4000)
    })
}
async function start() {
    let myTitle = chalkAnimation.neon(`Start 1-minute timer`);
    await sleep();
    myTitle.stop();
}

(async () => {
    await start();

    let duration = 1 * 60 * 1000;
    let stop = Date.now() + duration;

    let time = setInterval(function () {
        let now = Date.now();
        let diff = stop - now;

        if (diff <= 0) {
            clearInterval(time);
            console.log(chalk.blue.bgRed.bold("Timer Ended"));
            return;
        }

        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        let Time = chalk.blue(`${minutes}min ${seconds}sec`);

        console.log(Time);
    }, 1000);
})();

