module.exports = {
  LAUNCH: function() {
    this.toIntent("WelcomeIntent");
  },

  WelcomeIntent: function() {
    this.ask(
      "Welcome to food finder, you can search restaurants based on your location, recipe and name",
      "Now, tell me your preferred location to search for food"
    );
  }
};
