let display = document.getElementById("clock");

let d = () => {
let date = new Date();
    let result = `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
    display.innerHTML = result;
    console.log(display.innerHTML);
}

setInterval(d, 1000);



