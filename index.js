 console.log("hii")

let count = document.getElementById("count-el")
let currentCount = 0
function Counter() {
    // console.log("The Button was clicked");
    currentCount = currentCount + 1
    count.innerHTML = currentCount

    // for (var i = 5; i >= 1; i = i - 1) {
    //     console.log(i)
    // }
}
var saveEl = document.getElementById("save-el")

function SaveDisplay() {
    let countStr = currentCount + " - "
    saveEl.textContent += countStr

    console.log(currentCount)
    count.innerHTML = 0;
    currentCount = 0;
}

function Purchase(){
    document.getElementById("error").textContent = "Something went wrong! pls try again"
}




function CountDown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
//CountDown()

let lap1 = 34; lap2 = 33; lap3 = 36;
//function to log out the sum of all laps
function SumOfLaps() {
    console.log("the sum of all laps is ", lap1 + lap2 + lap3)
}
//SumOfLaps()

let lapsCompleted = 0
function increase() {
    lapsCompleted = lapsCompleted + 1
    console.log(lapsCompleted)
}
// increase()
// increase()
// increase()