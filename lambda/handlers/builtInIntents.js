module.exports = {
  StopIntent() {
    this.tell(this.t("GOODBYE_NOT_LINKED"));
  },
  CancelIntent() {
    this.tell(this.t("GOODBYE_NOT_LINKED"));
  },
  HelpIntent() {
    this.ask(this.t("HELP_MSG"));
  }
};
