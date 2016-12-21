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

    var hexDigits = '0123456789abcdef'

    var color = '#' + hexDigits[Math.floor(Math.random()*16)]
                    + hexDigits[Math.floor(Math.random()*16)]
                    + minutes
                    + hexDigits[Math.floor(Math.random()*16)]
                    + hexDigits[Math.floor(Math.random()*16)];

    if(color === '#ffffff') {
        color = '#000000';
    }

    clock.textContent = clockStr;

    document.body.style.backgroundColor = color;

}


setInterval(myClock, 1000);
