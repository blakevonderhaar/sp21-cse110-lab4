
function getTimeSecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(getTimeSecond, 1000);
