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
const historyData = [];
function getInnerText(id) {
    return document.getElementById(id).innerText;
}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function historyData1(name,call,date){
    let historyDiv = document.getElementById("history2");
    const div = document.createElement("div");
    console.log(historyData1.name)
    console.log(historyData1.call)
    console.log(historyData1.date)



    
       
        div.innerHTML = `
        <div class="flex justify-between items-center   p-4">
                <div>
                <h class="font-semibold text-[14px]">${name}</h>
                <p class="text-[12px] text-[gray]">${call}</p>
                </div>
                <p class="text-[12px] font-semibold">${date}</p>
            </div>`;

        historyDiv.appendChild(div);
    }




//btn1
const pointLabel = document.getElementById("point");
const button = document.getElementById("btn1");
let point = parseInt(pointLabel.textContent);
button.addEventListener("click", function() {
    let point = parseInt(pointLabel.textContent);
    if (point < 20){
        alert("Not enough points to call.");
        return;
    }

        let newPoint = point - 20;

        pointLabel.textContent = newPoint;
        alert("Calling Emergency Service 999...");
        const data = {
      name: "National Emergency Number",
      call: 999,
      date: new Date().toLocaleTimeString(),
    };
    historyData.push(data);
    console.log(historyData);
    historyData1(data.name, data.call, data.date);


});
// btn2
const pointLabel1 = document.getElementById("point");
const button1 = document.getElementById("btn2");
let point1 = parseInt(pointLabel1.textContent);
button1.addEventListener("click", function() {
    let point = parseInt(pointLabel1.textContent);
    if (point < 20){
        alert("Not enough points to call.");
        return;
    }

        let newPoint = point - 20;

        pointLabel.textContent = newPoint;
        alert("Calling Police Helpline 999...");
        const data = {
      name: "Police Helpline Number",
      call: 999,
      date: new Date().toLocaleTimeString(),
    };
    historyData.push(data);
    console.log(historyData);
    historyData1(data.name, data.call, data.date);
   
});
// btn3
const pointLabel2 = document.getElementById("point");
const button2 = document.getElementById("btn3");
let point2 = parseInt(pointLabel2.textContent);
button2.addEventListener("click", function() {
    let point2 = parseInt(pointLabel2.textContent);
    if (point2 < 20){
        alert("Not enough points to call.");
        return;
    }

        let newPoint = point2 - 20;

        pointLabel2.textContent = newPoint;
        alert("Calling Fire Service 999...");
        const data = {
      name: "Fire Service Number",
      call: 999,
      date: new Date().toLocaleTimeString(),
    };
    historyData.push(data);
    console.log(historyData);
    historyData1(data.name, data.call, data.date);

});
// btn4
const pointLabel3 = document.getElementById("point");
const button3 = document.getElementById("btn4");
let point3 = parseInt(pointLabel3.textContent);
button3.addEventListener("click", function() {
    let point3 = parseInt(pointLabel3.textContent);
    if (point3 < 20){
        alert("Not enough points to call.");
        return;
    }

        let newPoint = point3 - 20;

        pointLabel3.textContent = newPoint;
        alert("Calling Ambulance Service 1994-999999...");
        const data = {
      name: "Ambulance Service",
      call: "1994-999999",
      date: new Date().toLocaleTimeString(),
    };
    historyData.push(data);
    console.log(historyData);
    historyData1(data.name, data.call, data.date);
    
    
});
// btn5
const pointLabel4 = document.getElementById("point");
const button4 = document.getElementById("btn5");
let point4 = parseInt(pointLabel4.textContent);
button4.addEventListener("click", function() {
     let point4 = parseInt(pointLabel4.textContent);
    if (point4 < 20){
        alert("Not enough points to call.");
        return;
    }

        let newPoint = point4 - 20;

        pointLabel4.textContent = newPoint;
        alert("Calling Women & Child Service 109...");
        const data = {
      name: "Women & Child Service",
      call: 109,
      date: new Date().toLocaleTimeString(),
    };
    historyData.push(data);
    console.log(historyData);
    historyData1(data.name, data.call, data.date);

});
// btn6
const pointLabel5 = document.getElementById("point");
const button5 = document.getElementById("btn6");
let point5 = parseInt(pointLabel5.textContent);
button5.addEventListener("click", function() {
    let point5 = parseInt(pointLabel5.textContent);
    if (point5 < 20){
        alert("Not enough points to call.");
        return;
    }

        let newPoint = point5 - 20;

        pointLabel5.textContent = newPoint;
        alert("Calling Anti-Corruption Helpline 106...");
        const data = {
      name: "Anti-Corruption Helpline",
      call: 106,
      date: new Date().toLocaleTimeString(),
    };
    historyData.push(data);
    console.log(historyData);
    historyData1(data.name, data.call, data.date);
    
});
// btn7
const pointLabel6 = document.getElementById("point");
const button6 = document.getElementById("btn7");
let point6 = parseInt(pointLabel6.textContent);
button6.addEventListener("click", function() {
    let point6 = parseInt(pointLabel6.textContent);
    if (point6 < 20){
        alert("Not enough points to call.");
        return;
    }

        let newPoint = point6 - 20;

        pointLabel6.textContent = newPoint;
        alert("Calling Electricity Service 16216...");
        const data = {
      name: "Electricity Service",
      call: 16216,
      date: new Date().toLocaleTimeString(),
    };
    historyData.push(data);
    console.log(historyData);
    historyData1(data.name, data.call, data.date);
    
 });
// btn8
const pointLabel7 = document.getElementById("point");
const button7 = document.getElementById("btn8");
let point7 = parseInt(pointLabel7.textContent);
button7.addEventListener("click", function() {
     let point7 = parseInt(pointLabel7.textContent);
    if (point7 < 20){
        alert("Not enough points to call.");
        return;
    }

        let newPoint = point7 - 20;

        pointLabel7.textContent = newPoint;
        alert("Calling Brac Helpline 16445...");
        const data = {
      name: "Brac Helpline",
      call: 16445,
      date: new Date().toLocaleTimeString(),
    };
    historyData.push(data);
    console.log(historyData);
    historyData1(data.name, data.call, data.date);
    
});
// btn9
const pointLabel8 = document.getElementById("point");
const button8 = document.getElementById("btn9");
let point8 = parseInt(pointLabel8.textContent);
button8.addEventListener("click", function() {
     let point8 = parseInt(pointLabel8.textContent);
    if (point8 < 20){
        alert("Not enough points to call.");
        return;
    }

        let newPoint = point8 - 20;

        pointLabel8.textContent = newPoint;
        alert("Calling Bangladesh Railway Service 163...");
        const data = {
      name: "Bangladesh Railway Service",
      call: 163,
      date: new Date().toLocaleTimeString(),
    };
    historyData.push(data);
    console.log(historyData);
    historyData1(data.name, data.call, data.date);
    
});
//clear
document.getElementById("clear-history").addEventListener("click", function() {
    // console.log("Clear history clicked");
    document.getElementById("history2").innerText = "";
});