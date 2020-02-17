const totalInput = document.querySelector("#total");
const tipNum = document.querySelector("#tip");
const rateInput = document.querySelector("#rate");
const taxNum = document.querySelector("#tax");
const grandTotalNum = document.querySelector("#grand-total");
const calculateButton = document.querySelector("#calc");

calculateButton.onclick = async function(){
    console.log("Calculating Total");
    let calculateTotal = totalInput.value;
    let calculateRate = rateInput.value;
    let totalNum = parseInt(calculateTotal);
    let rateNum = parseInt(calculateRate);
    
    let tipnum2 = await calcTip(totalNum, rateNum);
    tipNum.innerHTML = tipnum2;
    
    const taxnum2 = await calcTax(totalNum, rateNum);
    taxNum.innerHTML = taxnum2;
    
    grandTotalNum.innerHTML = parseInt(calculateTotal)+parseInt(tipnum2)+parseFloat(taxnum2);
    
}
const calcTip = async function (totalInput, rateNum){
    console.log("Caculating Tip");
    let percent = rateNum/100;
    let tip = totalInput * percent;
    return tip.toFixed(2);
}
const calcTax = async function (totalInput){
    console.log("Caculating Tax");
    let tax = totalInput * 0.055;
    return tax.toFixed(2);
}