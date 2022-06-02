document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("lab-financial-data-graphing JS imported successfully!");
  },
  false
);

const selectDateStart = document.getElementById('start-date');
const selectDateEnd = document.getElementById('end-date');
const currencySelected = document.getElementById("currency-selected")

selectDateStart.addEventListener('input', (event) => {
  coinbaseAPI()
});
selectDateEnd.addEventListener('input', (event) => {
  coinbaseAPI()
});

currencySelected.addEventListener('change', (event) => {
  coinbaseAPI()
});