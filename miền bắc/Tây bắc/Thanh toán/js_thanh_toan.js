window.addEventListener("DOMContentLoaded", function () {
  const adultInput = document.querySelector("#nguoi-lon");
  const childInput = document.querySelector("#tre-em");
  const toddlerInput = document.querySelector("#tre-nho");
  const infantInput = document.querySelector("#so-sinh");

  const visaSelect = document.querySelector("#chon-visa");
  const visaQtyInput = document.querySelector("#so-visa");
  const roomSelect = document.querySelector("#chon-phong-don");
  const roomQtyInput = document.querySelector("#so-phong-don");

  const totalDisplay = document.querySelector("#tong-gia");

  const PRICES = {
    adult: 14099000,
    child: 11640000,
    toddler: 6000000,
    infant: 500000,
    visa: 790000,
    room: 2200000,
  };

  function formatCurrency(amount) {
    return amount.toLocaleString("vi-VN") + " đ";
  }

  function calculateTotal() {
    const adults = parseInt(adultInput.value) || 0;
    const children = parseInt(childInput.value) || 0;
    const toddlers = parseInt(toddlerInput.value) || 0;
    const infants = parseInt(infantInput.value) || 0;
    const visaQty =
      visaSelect.value === "Có" ? parseInt(visaQtyInput.value) || 0 : 0;
    const roomQty =
      roomSelect.value === "Có" ? parseInt(roomQtyInput.value) || 0 : 0;

    let total =
      adults * PRICES.adult +
      children * PRICES.child +
      toddlers * PRICES.toddler +
      infants * PRICES.infant +
      visaQty * PRICES.visa +
      roomQty * PRICES.room;

    totalDisplay.textContent = formatCurrency(total);
  }

  [
    adultInput,
    childInput,
    toddlerInput,
    infantInput,
    visaSelect,
    visaQtyInput,
    roomSelect,
    roomQtyInput,
  ].forEach((input) => {
    input.addEventListener("input", calculateTotal);
  });

  // Cập nhật ngay khi load
  calculateTotal();
});
