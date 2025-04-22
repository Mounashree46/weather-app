let balance = 1000; // initial balance

function checkBalance() {
  document.getElementById("message").textContent = "";
  document.getElementById("balance").textContent = "₹" + balance.toFixed(2);
}

function deposit() {
  let amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    document.getElementById("message").textContent = "Enter a valid amount to deposit.";
    return;
  }
  balance += amount;
  document.getElementById("balance").textContent = "₹" + balance.toFixed(2);
  document.getElementById("message").textContent = "₹" + amount + " deposited successfully!";
  document.getElementById("amount").value = "";
}

function withdraw() {
  let amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    document.getElementById("message").textContent = "Enter a valid amount to withdraw.";
    return;
  }
  if (amount > balance) {
    document.getElementById("message").textContent = "Insufficient balance!";
  } else {
    balance -= amount;
    document.getElementById("balance").textContent = "₹" + balance.toFixed(2);
    document.getElementById("message").textContent = "₹" + amount + " withdrawn successfully!";
  }
  document.getElementById("amount").value = "";
}

function exitATM() {
  document.getElementById("message").textContent = "Thank you for using the ATM.";
  document.getElementById("amount").value = "";
}
