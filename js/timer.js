var clock = document.getElementById('clock');


function myClock() {
    var time = new Date();
    var hours = (time.getHours() % 12).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if(hours.length < 2) {
        hours = '0' + hours;
    }

    if(minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if(seconds.length < 2) {
        seconds = '0' + seconds;
    }

    var clockStr = hours + ' : ' + minutes + ' : ' + seconds;

    var hexColorStr = '#' + hours + minutes + seconds;

    clock.textContent = clockStr;


}

function colorChanger() {
    var hexDigits = '0123456789abcdef'

    var color = '#' + hexDigits[Math.floor(Math.random()*16)]
                    + hexDigits[Math.floor(Math.random()*16)]
                    + hexDigits[Math.floor(Math.random()*16)]
                    + hexDigits[Math.floor(Math.random()*16)]
                    + hexDigits[Math.floor(Math.random()*16)]
                    + hexDigits[Math.floor(Math.random()*16)];

    if(color === '#ffffff') {
        color = '#000000';
    }
    
    document.body.style.backgroundColor = color;
}

setInterval(colorChanger, 1000);

setInterval(myClock, 1000);
