module.exports = {
  LAUNCH() {
    this.toIntent("WelcomeIntent");
  },

  WelcomeIntent() {
    this.ask(this.t("WELCOME"));
  },
  END() {
    this.tell(this.t("GOODBYE_NOT_LINKED"));
  },
  NewSearchIntent() {
    this.toIntent("WelcomeIntent");
  }
};
