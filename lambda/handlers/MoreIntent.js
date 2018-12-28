module.exports = {
  MoreIntent() {
    const detailsRes = this.getSessionAttribute("HDRes");
    console.log("detailsRes", detailsRes);
    this.followUpState("MoreDetailsState").ask(
      this.t("A_MORE_DETAILS", getMsgParams(detailsRes))
    );
  },
  MoreDetailsState: {
    YesIntent() {
      const detailsRes = this.getSessionAttribute("HDRes");
      console.log("detailsRes", detailsRes);
      this.followUpState("MoreDetailsState").ask(
        this.t("YES_MORE_DETAILS", getAddressParams(detailsRes))
      );
    },
    NoIntent() {
      this.ask(this.t("GO_FOR_NEXT_RES"));
    }
  }
};

const getMsgParams = data => ({
  postcode: data.location.zip_code,
  cnumber: data.phone
});

const getAddressParams = data => ({
  address: `${data.location.address1} , ${data.location.zip_code}`,
  cnumber: data.phone
});
