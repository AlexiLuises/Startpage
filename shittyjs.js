function start() {
    Clock();
    Img();
    Datum();
}
function Clock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
        h + ":" + m;
    var t = setTimeout(Clock, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function ordinal_suffix_of(i) {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";
}

function Img(){
    var today = new Date();
    var userName = "Kacper";
    var h = today.getHours();
    console.log(h);

    if(h>=6 && h<=11){
        document.getElementById('img').style.backgroundImage = "url('img/morning2.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-210px";
        document.getElementById('welcome').innerHTML = `Good morning ${userName}!`;
    }
    if(h>=12 && h<=16) {
        document.getElementById('img').style.backgroundImage = "url('img/day1.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-250px";
        document.getElementById('welcome').innerHTML = `Good day ${userName}!`;
    }
    if(h>=17 && h<=19) {
        document.getElementById('img').style.backgroundImage = "url('img/noon1.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-150px";
        document.getElementById('welcome').innerHTML = `Good afternoon ${userName}!`;
    }
    if((h>=20 && h<=23) || (h>=0 && h<=5)){
        document.getElementById('img').style.backgroundImage = "url('img/night1.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-240px";
        document.getElementById('welcome').innerHTML = `Good night ${userName}!`;
    }
}
function Datum(){
    var today = new Date();

    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var day = weekday[today.getDay()];

    var d = ordinal_suffix_of(today.getDate());

    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var m = month[today.getUTCMonth()];

    var total = `Today is ${day} the ${d} of ${m}`
    console.log(total);

    document.getElementById('datum').innerHTML = total;
}
