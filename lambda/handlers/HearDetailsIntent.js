module.exports = {
  HearDetailsIntent() {
    const selRes = this.getSesssionAttribute("currentRes");

    /* Const allRestaurants = this.getSessionAttribute("restaurants");

    const selRes = allRestaurants.filter(restaurant => {
      if (restaurant.name === selectedResName) {
        return { restaurant };
      }
      return false;
    });*/
    const speech = `${selRes.name} restaurant has ${
      selRes.review_count
    } reviews and ${selRes.rating} rating 
      and it is located at 
     ${selRes.location.address1}, ${selRes.location.zip_code}`;
    const reprompt =
      "Please do account linking to send the details to your inbox.";
    this.ask(speech, reprompt);
  }
};
