const calculator = function () {
  const priceTotal = document.getElementById('price-total');
  const calculatorForm = document.getElementById('card_order');
  const checkboxMozaika = document.getElementById('card_leto_mozaika');
  const checkboxShelkovo = document.getElementById('card_leto_schelkovo');
  const timeChangeBlocks = document.querySelectorAll('.time>input');

  const mozaikaPrices = {
    '1' : 1999,
    "6" : 9900,
    "9" : 13900,
    "12" : 19900
  };
  const shelkovoPrices = {
    "1" : 2999,
    "6" : 14990,
    "9" : 21990,
    "12" : 24990,
  };

  calculatorForm.addEventListener('change', function (event) {
    const target = event.target;
    console.log(target.value);
    if (target.closest('.time') && checkboxMozaika.checked) {
      priceTotal.textContent = mozaikaPrices[target.value];
    } else if (target.closest('.time') && checkboxShelkovo.checked) {
      priceTotal.textContent = shelkovoPrices[target.value];
    } else if (target.closest('.club') && target.value === 'schelkovo') {
      timeChangeBlocks.forEach(item => {
        if (item.checked) {
          console.log(shelkovoPrices[item.value]);
          priceTotal.textContent = shelkovoPrices[item.value];
        }
      })
    } else if (target.closest('.club') && target.value === 'mozaika') {
      timeChangeBlocks.forEach(item => {
        if (item.checked) {
          console.log(mozaikaPrices[item.value]);
          priceTotal.textContent = mozaikaPrices[item.value];
        }
      })
    }
  })
}

export default calculator;