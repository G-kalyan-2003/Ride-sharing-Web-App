const findRideForm = document.getElementById('find-ride-form');
const offerRideForm = document.getElementById('offer-ride-form');

findRideForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;

  // Add validation logic here (e.g., check if all fields are filled)
  if (from && to && date) {
    // Simulate search functionality (can be replaced with API calls)
    alert(`Searching for rides from ${from} to ${to} on ${date}`);
  } else {
    alert('Please fill in all fields.');
  }
});

offerRideForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const fromOffer = document.getElementById('from-offer').value;
  const toOffer = document.getElementById('to-offer').value;
});