const billAmount = document.getElementById('bill-amount');
const tipPercentage = document.getElementById('tip-percentage');
const calculatedTip = document.getElementById('calculated-tip');
const output = document.getElementById('output');


const calculateTip = () => {
  let calculatedValue = billAmount.value * tipPercentage.value;
  calculatedTip.value = calculatedValue.toFixed(2);
  output.style.display = 'block';
  removeLoader();
}

const loader = () => {
  if(output.parentElement.querySelector('img') === null) {
    let img = document.createElement('img');
    img.src = 'ajax-loader.gif';
    img.id = 'loader';
    output.parentElement.appendChild(img);
    img.style.display = 'block';
    img.style.margin = '0 auto';
  }
}

const removeLoader = () => {
    const loader = document.getElementById('loader');
    output.parentElement.removeChild(loader);
}

document.getElementById('calculator').addEventListener('submit', (e) => {
  output.style.display = 'none';
  loader();
  setTimeout(calculateTip, 700);

  e.preventDefault();
});
