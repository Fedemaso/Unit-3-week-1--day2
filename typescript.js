"use strict";
console.log("hello");
class Account {
  constructor(balance = 0) {
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Saldo insufficiente per il prelievo.");
    }
  }
  getBalance() {
    return this.balance;
  }
}
class SonAccount extends Account {
  oneDeposit(amount) {
    this.deposit(amount);
  }
  oneWithdraw(amount) {
    this.withdraw(amount);
  }
}
class MotherAccount extends Account {
  addInterest() {
    const interest = this.balance * 0.1; // 10% di interesse
    this.deposit(interest);
  }
}
// Creazione degli account
const sonAccount = new SonAccount();
const motherAccount = new MotherAccount();
// Operazioni sui conti
sonAccount.oneDeposit(0);
sonAccount.oneWithdraw(0);
motherAccount.deposit(0);
motherAccount.addInterest();
// Stampa dei saldi attuali
console.log("Saldo conto del figlio:", sonAccount.getBalance());
console.log("Saldo conto della madre:", motherAccount.getBalance());
// versamento sul conto del figlio
function depositToSon() {
  const amount = parseFloat(document.getElementById("sonAmount").value);
  sonAccount.oneDeposit(amount);
  updateBalances();
  clearSonInput();
}
// prelievo dal conto del figlio
function withdrawFromSon() {
  const amount = parseFloat(document.getElementById("sonAmount").value);
  sonAccount.oneWithdraw(amount);
  updateBalances();
  clearSonInput();
}
// svuoto input del conto del figlio
function clearSonInput() {
  document.getElementById("sonAmount").value = "";
}
// versamento sul conto della madre
function depositToMother() {
  const amount = parseFloat(document.getElementById("motherAmount").value);
  motherAccount.deposit(amount);
  updateBalances();
  clearMotherInput();
}
// prelievo dal conto della madre
function withdrawFromMother() {
  const amount = parseFloat(document.getElementById("motherAmount").value);
  motherAccount.withdraw(amount);
  updateBalances();
  clearMotherInput();
}
// Svuoto input del conto della madre
function clearMotherInput() {
  document.getElementById("motherAmount").value = "";
}
// aggiungo l'interesse al conto della madre
function addInterestToMother() {
  motherAccount.addInterest();
  updateBalances();
}
// aggiorno i saldi visualizzati
function updateBalances() {
  document.getElementById("sonBalance").textContent = sonAccount
    .getBalance()
    .toFixed(2);
  document.getElementById("motherBalance").textContent = motherAccount
    .getBalance()
    .toFixed(2);
}
function addInterestToAccounts() {
  const sonBalance = sonAccount.getBalance();
  const motherBalance = motherAccount.getBalance();
  const sonInterest = sonBalance * 0.1;
  const motherInterest = motherBalance * 0.1;
  sonAccount.deposit(sonInterest);
  motherAccount.deposit(motherInterest);
  updateBalances();
}
