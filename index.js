/*
1 meter = 3.28084 feet
1 liter = 0.264 gallon
1 kilogram = 2.20462 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let inputConv = ""

convertBtn.addEventListener("click", function() {
    inputConv = Number(inputEl.value)
    convertUnit ()
})

function convertUnit () {
    lengthEl.textContent = `${inputConv} meters = ${(inputConv * 3.28084).toFixed(3)} feet | ${inputConv} feet = ${(inputConv / 3.28084).toFixed(3)} meters`
    volumeEl.textContent = `${inputConv} liters = ${(inputConv * 0.264172).toFixed(3)} gallons | ${inputConv} gallons = ${(inputConv / 0.264172).toFixed(3)} liters`
    massEl.textContent = `${inputConv} kilos = ${(inputConv * 2.20462).toFixed(3)} pounds | ${inputConv} pounds = ${(inputConv / 2.20462).toFixed(3)} kilos` 
}
