const BASE_URL = "https://open.er-api.com/v6/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdowns
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let option = document.createElement("option");
    option.value = currCode;
    option.innerText = currCode;

    if (select.name === "from" && currCode === "USD") option.selected = true;
    if (select.name === "to" && currCode === "BDT") option.selected = true;

    select.appendChild(option);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

// Update flag
function updateFlag(element) {
  const currCode = element.value;
  const countryCode = countryList[currCode];
  const img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// Fetch and display exchange rate
const updateExchangeRate = async () => {
  const amountInput = document.querySelector(".amount input");
  let amtVal = amountInput.value || 1;

  const from = fromCurr.value;
  const to = toCurr.value;
  const URL = `${BASE_URL}/${from}`;

  console.log("API URL:", URL);

  try {
    const response = await fetch(URL);
    console.log("API Status:", response.status);

    if (!response.ok) throw new Error("Failed to fetch API");

    const data = await response.json();
    const rate = data.rates[to];

    if (!rate) {
      msg.innerText = `Conversion from ${from} to ${to} not available.`;
      return;
    }

    const finalAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${from} = ${finalAmount} ${to}`;
  } catch (error) {
    msg.innerText = "Error fetching exchange rate.";
    console.error("Error:", error);
  }
};

// Button click event
btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

// Initial page load
window.addEventListener("load", () => {
  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
});
