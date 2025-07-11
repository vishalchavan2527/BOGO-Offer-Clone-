function selectOption(option) {
  document.getElementById(`unit${option}`).checked = true;

  let totalPrice = 0;

  switch (option) {
    case 1:
      totalPrice = 10.00;
      break;
    case 2:
      totalPrice = 18.00;
      break;
    case 3:
      totalPrice = 24.00;
      break;
  }

  document.getElementById("totalPrice").textContent = `$${totalPrice.toFixed(2)} USD`;
}
