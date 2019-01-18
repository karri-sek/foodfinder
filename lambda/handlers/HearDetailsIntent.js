const { getBDetails } = require("../../utils/yelpApiHelper");
const { hearDetailsParams } = require("../../utils/paramUtils");
const { getCardWithOneImage } = require("../../utils/sendAlexaCard");
const { getCardDetails } = require("../../utils/cUtils");
module.exports = {
  HearDetails() {
    const fRes = this.getSessionAttribute("fRes");
    getBDetails(fRes.id).then(res => {
      this.setSessionAttribute("fRes", undefined);
      this.setSessionAttribute("HDRes", res.data);
      this.showImageCard(
        res.data.name,
        res.data.location.display_address[0],
        res.data.image_url
      ).ask(this.t("DESCRIPTION", hearDetailsParams(res.data)));

      /* GetCardWithOneImage(this, getCardDetails(res.data)).ask(
        this.t("DESCRIPTION", hearDetailsParams(res.data))
      );*/
    });
  }
};
