//tip calculator

function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  if (billAmt === "" || serviceQual == 0) {
    alert("please enter values");
    return;
  }
  //see if this input is empty or less than or equal to 1

  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  //calculation
var total = (billAmt * serviceQual) / numOfPeople;
//round two decimal points

total = Math.round(total*100) / 100;

// two digits after decimal point

total = total.toFixed(2);

//display tip amount

document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = total;

}
// hide the tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click function

document.getElementById("calculate").onclick = function(){
  calculateTip();
};