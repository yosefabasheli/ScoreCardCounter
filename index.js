
let homepointEl = document.getElementById("homescore")

let guestpointEl = document.getElementById("guestscore")

let countHome = 0;

function homePoint1(){
    countHome += 1;
    homepointEl.textContent = countHome;
}

function homePoint2(){
    countHome += 2;
    homepointEl.textContent = countHome;
}

function homePoint3(){
    countHome += 3;
    homepointEl.textContent = countHome;
}

let countGuest = 0;

function guestPoint1(){
    countGuest += 1;
    guestpointEl.textContent = countGuest;
}

function guestPoint2(){
    countGuest += 2;
    guestpointEl.textContent = countGuest;
}

function guestPoint3(){
    countGuest += 3;
    guestpointEl.textContent = countGuest;
}


