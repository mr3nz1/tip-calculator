let btns = document.querySelectorAll(".tip-amount");
let bill = document.querySelector(".bill");
let people = document.querySelector("#people");
let ansElement = document.querySelector("#ans");
let ansElementTot = document.querySelector("#ans-total");
let resetBtn = document.querySelector("#reset");
let customTip = document.querySelector("#custom-tip");

let tip = "";
let billAmount = ""; 
let numberOfPeople = "";

let tipAmount;
let totalAmount;



class Tipcalculator {
    constructor (ansElement, ansElementTot) {
        this.ansElement = ansElement;
        this.ansElementTot = ansElementTot;
    }
    
    check (tip, billAmount, numberOfPeople) {
            this.calculatetTip();
    }
    
    calculatetTip () {
        tipAmount = (billAmount * tip) / 100;
        totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);
        if (!isNaN(tipAmount) && !isNaN(totalAmount)) {
            this.update(tipAmount, totalAmount);

        }
    }

    update (tip, total) {
        ansElement.textContent = `$${tip}`;
        ansElementTot.textContent = `$${total}`;
        ansElement.style.color = "hsl(172, 67%, 45%)";
        ansElementTot.style.color = "hsl(172, 67%, 45%)";
        resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
    }

    reset () {
        ansElement.textContent = "$0.00";
        ansElementTot.textContent = "$0.00";
        bill.value = "";
        people.value = "";
        customTip.value = ""
    }
}

let calc = new Tipcalculator(ansElement, ansElementTot)


btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        tip = btn.value;
        btn.style.backgroundColor = "hsl(172, 67%, 45%)";
        btn.style.color = "hsl(183, 100%, 15%)";
        calc.check(tip, billAmount, people);
    })    
})


bill.addEventListener("keyup", () => {
    billAmount = bill.value;
    calc.check(tip, billAmount, people);
})
  
people.addEventListener("keyup", () => {
    numberOfPeople = people.value;
    calc.check(tip, billAmount, numberOfPeople);
})

resetBtn.addEventListener("click", () => {
    calc.reset();
})

customTip.addEventListener("keyup", () => {
    tip = customTip.value;
    calc.check(tip, billAmount, people);
})

