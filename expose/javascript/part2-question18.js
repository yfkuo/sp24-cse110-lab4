function currTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let printTime = setInterval(currTime, 1000);