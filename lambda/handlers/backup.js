if (allRestaurants.length > 0) {
  this.setSessionAttribute("restaurants", allRestaurants);
  const bestRestaurants = getBestRestaurants(allRestaurants);
  const restaurant = bestRestaurants[0];
  console.log("First best Restaurant ", restaurant);
  this.setSessionAttribute("namesSaid", namesSaid.push(restaurant));
  this.setSessionAttribute("currentRes", restaurant);
  const speech = `How about ${
    restaurant.name
  } restaurant . Say hear the details, or more to go for next restaurant.`;
  const reprompt =
    "Say hear the details, or more to go for next restaurant or begin new search ";
  this.ask(speech, reprompt);
} else {
  noRestaurant(this);
}
