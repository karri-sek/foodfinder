module.exports = {
  NewSearchIntent() {
    const srepeats = this.getSessionAttribute("srepeats");
    if (!srepeats) {
      this.setSessionAttribute("srepeats", 1);
    }
    const recipeName = this.getSessionAttribute("recipeName");

    const location = this.getSessionAttribute("location");
    console.log("NSI:", recipeName, ">>>", location);
    if (srepeats && srepeats < 6) {
      this.setSessionAttribute("srepeats", srepeats + 1);
    } else {
      this.ask(this.t("EXCEED_SEARCHES"));
    }
    this.ask(this.t("SEARCH_WELCOME"));
  }
};
