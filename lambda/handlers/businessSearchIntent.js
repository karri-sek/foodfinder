const { sayFirstResult } = require("../../utils/yelpApiHelper");
const { getNextParams } = require("../../utils/paramUtils");
module.exports = {
  BusinessSearchIntent(recipe) {
    const location = this.getSessionAttribute("location");
    const rName = recipe.value;
    this.setSessionAttribute("recipeName", rName);
    console.log("BST:recipeName ", rName);
    console.log("BST:location:", location);
    if (location === undefined && rName) {
      this.ask(this.t("R_FOUND_L_NOT_FOUND", getNextParams(rName)));
    } else {
      sayFirstResult(this, location, rName);
    }
  }
};
