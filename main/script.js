document.getElementById("heart1").addEventListener("click", function() {
    let countlabel = document.getElementById("heart-count");
    let count = parseInt(countlabel.textContent);
    count++;
    countlabel.textContent = count;
});
document.getElementById("heart2").addEventListener("click", function() {
    let countlabel = document.getElementById("heart-count");
    let count = parseInt(countlabel.textContent);
    count++;
    countlabel.textContent = count;
});
document.getElementById("heart3").addEventListener("click", function() {
    let countlabel = document.getElementById("heart-count");
    let count = parseInt(countlabel.textContent);
    count++;
    countlabel.textContent = count;
});
document.getElementById("heart4").addEventListener("click", function() {
    let countlabel = document.getElementById("heart-count");
    let count = parseInt(countlabel.textContent);
    count++;
    countlabel.textContent = count;
});
document.getElementById("heart5").addEventListener("click", function() {
    let countlabel = document.getElementById("heart-count");
    let count = parseInt(countlabel.textContent);
    count++;
    countlabel.textContent = count;
});
document.getElementById("heart6").addEventListener("click", function() {
    let countlabel = document.getElementById("heart-count");
    let count = parseInt(countlabel.textContent);
    count++;
    countlabel.textContent = count;
});
document.getElementById("heart7").addEventListener("click", function() {
    let countlabel = document.getElementById("heart-count");
    let count = parseInt(countlabel.textContent);
    count++;
    countlabel.textContent = count;
});
document.getElementById("heart8").addEventListener("click", function() {
    let countlabel = document.getElementById("heart-count");
    let count = parseInt(countlabel.textContent);
    count++;
    countlabel.textContent = count;
});
document.getElementById("heart9").addEventListener("click", function() {
    let countlabel = document.getElementById("heart-count");
    let count = parseInt(countlabel.textContent);
    count++;
    countlabel.textContent = count;
});
// history div
// const historyData = []


// const data = {name: "Emergency Service",call:999, 
//     date:new Date().toLocaleTimeString(),

// };
// historyData.push(data);


//btn1
const pointLabel = document.getElementById("point");
const button = document.getElementById("btn1");
let point = parseInt(pointLabel.textContent);
button.addEventListener("click", function() {
    if (point>=20){
        point -= 20;
        pointLabel.textContent = point;
        alert("Calling Emergency Service 999...");
    }else{
        alert("Not enough points to call.");
    }
});
// btn2
const pointLabel1 = document.getElementById("point");
const button1 = document.getElementById("btn2");
let point1 = parseInt(pointLabel1.textContent);
button1.addEventListener("click", function() {
    if (point1>=20){
        point1 -= 20;
        pointLabel1.textContent = point1;
        alert("Calling Police Helpline 999...");
    }else{
        alert("Not enough points to call.");
    }
});
// btn3
const pointLabel2 = document.getElementById("point");
const button2 = document.getElementById("btn3");
let point2 = parseInt(pointLabel2.textContent);
button2.addEventListener("click", function() {
    if (point2>=20){
        point2 -= 20;
        pointLabel2.textContent = point2;
        alert("Calling Fire Service 999...");
    }else{
        alert("Not enough points to call.");
    }
});
// btn4
const pointLabel3 = document.getElementById("point");
const button3 = document.getElementById("btn4");
let point3 = parseInt(pointLabel3.textContent);
button3.addEventListener("click", function() {
    if (point3>=20){
        point3 -= 20;
        pointLabel3.textContent = point3;
        alert("Calling Ambulance Service 1994-999999...");
    }else{
        alert("Not enough points to call.");
    }
});
// btn5
const pointLabel4 = document.getElementById("point");
const button4 = document.getElementById("btn5");
let point4 = parseInt(pointLabel4.textContent);
button4.addEventListener("click", function() {
    if (point4>=20){
        point4 -= 20;
        pointLabel4.textContent = point4;
        alert("Calling Women & Child Service 109...");
    }else{
        alert("Not enough points to call.");
    }
});
// btn6
const pointLabel5 = document.getElementById("point");
const button5 = document.getElementById("btn6");
let point5 = parseInt(pointLabel5.textContent);
button5.addEventListener("click", function() {
    if (point5>=20){
        point5 -= 20;
        pointLabel5.textContent = point5;
        alert("Calling Anti-Corruption Helpline 106...");
    }else{
        alert("Not enough points to call.");
    }
});
// btn7
const pointLabel6 = document.getElementById("point");
const button6 = document.getElementById("btn7");
let point6 = parseInt(pointLabel6.textContent);
button6.addEventListener("click", function() {
    if (point6>=20){
        point6 -= 20;
        pointLabel6.textContent = point6;
        alert("Calling Electricity Service 16216...");
    }else{
        alert("Not enough points to call.");
     }
 });
// btn8
const pointLabel7 = document.getElementById("point");
const button7 = document.getElementById("btn8");
let point7 = parseInt(pointLabel7.textContent);
button7.addEventListener("click", function() {
    if (point7>=20){
        point7 -= 20;
        pointLabel7.textContent = point7;
        alert("Calling Brac Helpline 16445...");
    }else{
        alert("Not enough points to call.");
    }
});
// btn9
const pointLabel8 = document.getElementById("point");
const button8 = document.getElementById("btn9");
let point8 = parseInt(pointLabel8.textContent);
button8.addEventListener("click", function() {
    if (point8>=20){
        point8 -= 20;
        pointLabel8.textContent = point8;
        alert("Calling Bangladesh Railway Service 163...");
    }else{
        alert("Not enough points to call.");
    }
});
