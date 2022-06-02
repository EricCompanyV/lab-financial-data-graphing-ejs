document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("lab-financial-data-graphing JS imported successfully!");
  },
  false
);

const selectDate = document.querySelector('.date-picker');

selectDate.addEventListener('change', (event) => {
  coinbaseAPI()
});