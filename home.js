// console.log('home.js connected')
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

// pin validation check bcz amader database nai so function er bire rekhe dechi 
const validPin = 1234; 