let salary = document.querySelector("#salary");
let check = document.querySelector("#check");
let display = document.querySelector("h3");

check.addEventListener("click",(e) => {
  e.preventDefault();  
  if(salary.value >= 2000){
    let loanAmount = salary.value * 3;
    if(loanAmount <= 6000 ){
        display.textContent = `Congratulations, you qualify for a loan amount of ${loanAmount} repayable within the next 7 months`;
    }else if(loanAmount <= 100000){
        display.textContent = `Congratulations, you qualify for a loan amount of ${loanAmount} repayable within the next 9 months`;
    }else if(loanAmount <= 200000){
        display.textContent = `Congratulations, you qualify for a loan amount of ${loanAmount} repayable within the next 2 years`;
    }else{
        display.textContent = `Congratulations, you qualify for a loan amount of ${loanAmount} repayable within the next 100 years`;
    }    
  }else{
    display.textContent = "Sorry, You do not qualify for a loan." ;
  }
})

