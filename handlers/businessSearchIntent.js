const yelpApiHelper = require("../utils/yelpApiHelper");
const { getBestRestaurants } = require("../utils/getBestRestaurants");
module.exports = {
  BusinessSearchIntent(recipe) {
    const userPrefLocation = this.getSessionAttribute("location");
    console.log(" request ", recipe.value);
    console.log("location from session ", userPrefLocation);

    yelpApiHelper({
      location: userPrefLocation,
      term: recipe.value,
      sort_by: "best_match"
    }).then(response => {
      // Console.log("response from api ", response.data.businesses);
      const allRestaurants = response.data.businesses;
      if (allRestaurants.length > 0) {
        const bestRestaurants = getBestRestaurants(response.data.businesses);
        console.log("First best Restaurant ", bestRestaurants[0]);
        const speech = `I found ${
          bestRestaurants[0].name
        } restaurant . ask me to hear the details, or begin new search `;

        const reprompt = "ask me to hear the details, or begin new search ";
        // This.followUpState("NameState")
        this.ask(speech, reprompt);
      }
    });
  }
};
