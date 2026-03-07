function planTrip() {

  const from = document.getElementById("from").value;
  const destination = document.getElementById("destination").value;
  const budget = parseInt(document.getElementById("budget").value);
  const people = parseInt(document.getElementById("people").value);
  const days = parseInt(document.getElementById("days").value);
  const result = document.getElementById("result");

  if (!from || !destination || !budget || !people || !days) {
    result.innerHTML = "Please fill all fields.";
    return;
  }

  let travel = Math.round(budget * 0.4);
  let stay = Math.round(budget * 0.35);
  let food = Math.round(budget * 0.15);
  let buffer = Math.round(budget * 0.1);

  let flightLink = `https://www.skyscanner.co.in/transport/flights/`;
  let hotelLink = `https://www.booking.com/searchresults.html?ss=${destination}`;

  result.innerHTML = `
    <h3>${from} → ${destination}</h3>

    <p>Travel Budget: ₹${travel}</p>
    <p>Stay Budget: ₹${stay}</p>
    <p>Food Budget: ₹${food}</p>
    <p>Buffer: ₹${buffer}</p>

    <br>

    <a href="${flightLink}" target="_blank">
      <button>Search Flights</button>
    </a>

    <a href="${hotelLink}" target="_blank">
      <button>Search Hotels</button>
    </a>
  `;
}