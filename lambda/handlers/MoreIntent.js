module.exports = {
  MoreIntent() {
    const detailsRes = this.getSessionAttribute("HDRes");
    console.log("detailsRes", detailsRes);
    this.ask(this.t("A_MORE_DETAILS", getMsgParams(detailsRes)));
  }
};

const getMsgParams = data => ({
  postcode: data.location.zip_code,
  cnumber: data.phone
});
