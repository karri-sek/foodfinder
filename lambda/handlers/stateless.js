const literals = require("../../utils/stringLiterals");
module.exports = {
  LAUNCH() {
    this.toIntent("WelcomeIntent");
  },

  WelcomeIntent() {
    const sessionStartType = getSessionStartType(this);
    console.log("sessionStartType:", sessionStartType);
    switch (sessionStartType) {
      case literals.ACCOUNT_LINKED_WITH_HISTORY:
        this.ask(this.t("ACCOUNT_LINKED_WITH_HISTORY"));
        break;
      case literals.ACCOUNT_LINKED_WITH_NO_HISTORY:
        this.ask(this.t("WELCOME_WITH_ACCOUNT_LINK_MSG"));
        break;
      default:
        this.alexaSkill()
          .showAccountLinkingCard()
          .ask(this.t("WELCOME_WITH_ACCOUNT_LINK_MSG"));
    }
  },
  END() {
    this.tell(this.t("GOODBYE_NOT_LINKED"));
  },
  NewSearchIntent() {
    this.toIntent("WelcomeIntent");
  }
};

const getSessionStartType = thisRef => {
  const lastRestaurantHeard = thisRef.getSessionAttribute(
    "lastRestaurantHeard"
  );
  const hasAcceessToken = thisRef.getAccessToken();
  if (lastRestaurantHeard && hasAcceessToken) {
    return literals.ACCOUNT_LINKED_WITH_HISTORY;
  }
  if (hasAcceessToken) {
    return literals.ACCOUNT_LINKED_WITH_NO_HISTORY;
  }
  return literals.ACCOUNT_NOT_LINKED;
};
