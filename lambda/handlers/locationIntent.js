const yelpApiHelper = require("../../utils/yelpApiHelper");
module.exports = {
  LocationIntent(location) {
    console.log("location ", location.value);
    const searchLocation = location.value;
    this.setSessionAttribute("location", searchLocation);
    if (searchLocation) {
      yelpApiHelper({ location: searchLocation }).then(response => {
        const totalCount = response.data.total;
        console.log("totalCount ", totalCount);

        if (totalCount > 0) {
          const speech = `I found ${totalCount} restaurants in ${searchLocation} location.
                Now, you tell me the recipe name, for a best restaurant match`;

          const reprompt =
            "tell me the recipe name, for a best restaurant match";
          // This.followUpState("NameState")
          this.ask(speech, reprompt);
        }
      });
    }
  }
};
