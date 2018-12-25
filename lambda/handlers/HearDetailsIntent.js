const { getBDetails } = require("../../utils/yelpApiHelper");
module.exports = {
  HearDetails() {
    const fRes = this.getSessionAttribute("fRes");
    getBDetails(fRes.id).then(res => {
      this.setSessionAttribute("fRes", undefined);
      this.setSessionAttribute("HDRes", res.data);
      this.ask(this.t("HEAR_DETAILS", getMsgParams(res.data)));
    });
  }
};

const getMsgParams = ({ rating, review_count }) => ({
  rating,
  rcount: review_count
});
