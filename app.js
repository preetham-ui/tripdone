function planTrip(){

const from = document.getElementById("from").value;
const destination = document.getElementById("destination").value;
const budget = parseInt(document.getElementById("budget").value);
const people = document.getElementById("people").value;
const days = document.getElementById("days").value;

const result = document.getElementById("result");

if(!from || !destination || !budget || !people || !days){
result.innerHTML = "Please fill all fields";
return;
}

const plans = generateTripOptions(budget);

const flightLink = "https://www.skyscanner.co.in/transport/flights/";
const hotelLink = "https://www.booking.com/searchresults.html?ss=" + destination;

result.innerHTML = `
<div class="resultCard">

<h2>${from} → ${destination}</h2>

<h3>Budget Plan</h3>
Travel ₹${plans.budgetTrip.travel}<br>
Stay ₹${plans.budgetTrip.stay}<br>
Food ₹${plans.budgetTrip.food}<br><br>

<h3>Balanced Plan</h3>
Travel ₹${plans.balancedTrip.travel}<br>
Stay ₹${plans.balancedTrip.stay}<br>
Food ₹${plans.balancedTrip.food}<br><br>

<h3>Comfort Plan</h3>
Travel ₹${plans.comfortTrip.travel}<br>
Stay ₹${plans.comfortTrip.stay}<br>
Food ₹${plans.comfortTrip.food}<br><br>

<a href="${flightLink}" target="_blank">View Flights</a><br>
<a href="${hotelLink}" target="_blank">View Hotels</a>

</div>
`;

}