// -----add money btn features star heree----------

// console.log('home.js connected')
// pin validation check bcz amader database nai so function er bire rekhe dechi 

const validPin = 1234;
document.getElementById("add-money-btn").addEventListener("click", function (e) {
  // console.log('click')
  e.preventDefault();
  // console.log("add money btn clicked")
  const bank = document.getElementById("bank").value;
  const accountNumber = document.getElementById("account-number").value;
  const amount = parseInt(document.getElementById("add-amount").value);
  const pin = parseInt(document.getElementById("add-pin").value);
  // console.log(bank,accountNumber,amount,pin);
  const availableBlance = parseInt(document.getElementById("available-blance").innerText);
  // console.log(availableBlance)

  // condition check 11 digit number acee ki na
  if (accountNumber.length < 11) {
    alert("please provide valid account number");
    return;
  }
  //pin validPin same kina
  if (pin !== validPin) {
    alert("please provide valid pin");
    return;
  }

  const totalNewAvailableBlance = availableBlance + amount;
  // console.log(totalNewAvailableBlance)
  document.getElementById("available-blance").innerText = totalNewAvailableBlance;
  // console.log(totalNewAvailableBlance)
})

// cash out features start here 

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("withdraw button click")
  const amount = parseInt(document.getElementById("withdraw-amount").value)
  const availableBlance = parseInt(document.getElementById("available-blance").innerText);
  // console.log(amount, availableBlance);
  const newTotalAvailableBalance = availableBlance - amount
  // console.log(newTotalAvailableBalance)
  document.getElementById("available-blance").innerText = newTotalAvailableBalance;
})







// toggling features 
document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "block";
  document.getElementById("add-money-parent").style.display = "none"
})