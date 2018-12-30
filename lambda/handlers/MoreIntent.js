const paramUtils = require("../../utils/cUtils");
module.exports = {
  MoreIntent() {
    const detailsRes = this.getSessionAttribute("HDRes");
    console.log("MI:DetailsRes:", detailsRes);
    this.followUpState("MoreDetailsState").ask(
      this.t("A_MORE_DETAILS", paramUtils.getMoreParams(detailsRes))
    );
  },
  MoreDetailsState: {
    YesIntent() {
      const detailsRes = this.getSessionAttribute("HDRes");
      console.log("MI:detailsRes:", detailsRes);
      this.followUpState("MoreDetailsState").ask(
        this.t("YES_MORE_DETAILS", paramUtils.getAddressParams(detailsRes))
      );
    },
    NoIntent() {
      this.ask(this.t("GO_FOR_NEXT_RES"));
    }
  }
};
