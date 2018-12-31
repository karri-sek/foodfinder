const { getBDetails } = require("../../utils/yelpApiHelper");
const { hearDetailsParams } = require("../../utils/paramUtils");
module.exports = {
  HearDetails() {
    const fRes = this.getSessionAttribute("fRes");
    getBDetails(fRes.id).then(res => {
      this.setSessionAttribute("fRes", undefined);
      this.setSessionAttribute("HDRes", res.data);
      this.ask(this.t("HEAR_DETAILS", hearDetailsParams(res.data)));
    });
  }
};
