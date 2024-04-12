function calculateCost(hotelPrice, duration, ticketPrice, budget) {
  let totalCost = hotelPrice * duration + ticketPrice;
  console.log(`The total cost of your plan is: ${totalCost}`);
  console.log(`Your budget is $ ${budget}.`);

  //deciding whether the plan is within our budget or not
  var result;
  if (totalCost <= budget) {
    result = "Let's Go!!";
  } else {
    result = "Please Change your Plans to meet your budget";
  }
  return result;
}
