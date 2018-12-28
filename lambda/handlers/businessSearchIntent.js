const { callYelpApi } = require("../../utils/yelpApiHelper");
const _ = require("lodash");
const cUtils = require("../../utils/cUtils");

module.exports = {
  BusinessSearchIntent(recipe) {
    const location = this.getSessionAttribute("location");
    const rName = recipe.value;
    this.setSessionAttribute("recipeName", rName);
    console.log("recipeName ", rName);
    console.log("location from session ", location);

    callYelpApi(cUtils.getYelpParams(location, rName)).then(res => {
      const { total } = res.data;
      console.log("total : ", total);
      const fRes = cUtils.getShuffleRes(res.data);
      this.setSessionAttribute("fRes", fRes);
      this.setSessionAttribute("popRes", 1);
      if (total > 1) {
        this.ask(
          this.t("FOUND_MORE_RES", cUtils.getMsgParams(total, fRes, rName))
        );
      }
    });
  }
};
