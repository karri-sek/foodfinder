const { sayFirstResult } = require("../../utils/yelpApiHelper");

module.exports = {
  BusinessSearchIntent(recipe) {
    const location = this.getSessionAttribute("location");
    const rName = recipe.value;
    this.setSessionAttribute("recipeName", rName);
    console.log("recipeName ", rName);
    console.log("location from session:", location);
    if (location === undefined) {
      this.ask(this.t("SEARCH_WELCOME"));
    } else {
      sayFirstResult(this, location, rName);
    }
  }
};
