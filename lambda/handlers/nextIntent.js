const { callYelpApi } = require("../../utils/yelpApiHelper");
const cUtils = require("../../utils/cUtils");
module.exports = {
  NextIntent() {
    const loc = this.getSessionAttribute("location");
    const rName = this.getSessionAttribute("recipeName");
    const popResCount = this.getSessionAttribute("popRes");
    if (popResCount < 6) {
      callYelpApi(cUtils.getYelpParams(loc, rName)).then(res => {
        const { total } = res.data;
        const fRes = cUtils.getShuffleRes(res.data);
        this.setSessionAttribute("fRes", fRes);
        this.setSessionAttribute("popRes", popResCount + 1);
        if (total > 1) {
          this.ask(this.t("NEXT_RES", cUtils.getNextParams(fRes.name)));
        }
      });
    } else {
      this.ask(this.t("EXCEED_POP_RES"));
    }
  }
};
