module.exports = {
  LAUNCH: function() {
    this.toIntent("WelcomeIntent");
  },

  WelcomeIntent: function() {
    /*this.ask(
      "Welcome to food finder, you can search restaurants based on your location, recipe or restaurant name",
      "Now, tell me your preferred location to search for food"
    ); */
    this.ask(
      "Welcome to food finder, tell me your preferred location to search for food"
    );
  },
  END: function() {
    this.tell(
      "thanks for using the food finder, hope you found your favourite restaurant"
    );
  }
};
