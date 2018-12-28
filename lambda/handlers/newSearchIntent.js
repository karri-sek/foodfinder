module.exports = {
  NewSearchIntent() {
    const srepeats = this.getSessionAttribute("srepeats");
    if (!srepeats) {
      this.setSessionAttribute("srepeats", 1);
    }
    if (srepeats && srepeats < 6) {
      this.setSessionAttribute("srepeats", srepeats + 1);
    } else {
      this.ask(this.t("EXCEED_SEARCHES"));
    }
    this.ask(this.t("SEARCH_WELCOME"));
  }
};
