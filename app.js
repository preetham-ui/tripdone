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
const plans = generateTripOptions(budget);

const budgetPlan = plans.budgetTrip;
const balancedPlan = plans.balancedTrip;
const comfortPlan = plans.comfortTrip;

  let flightLink = `https://www.skyscanner.co.in/transport/flights/`;
  let hotelLink = `https://www.booking.com/searchresults.html?ss=${destination}`;

  result.innerHTML = `
<h3>${from} → ${destination}</h3>

<h4>Budget Trip</h4>
Travel: ₹${budgetPlan.travel}<br>
Stay: ₹${budgetPlan.stay}<br>
Food: ₹${budgetPlan.food}<br>

<h4>Balanced Trip</h4>
Travel: ₹${balancedPlan.travel}<br>
Stay: ₹${balancedPlan.stay}<br>
Food: ₹${balancedPlan.food}<br>

<h4>Comfort Trip</h4>
Travel: ₹${comfortPlan.travel}<br>
Stay: ₹${comfortPlan.stay}<br>
Food: ₹${comfortPlan.food}<br>
`;