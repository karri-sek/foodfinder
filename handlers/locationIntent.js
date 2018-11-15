const axios = require("axios");
const config = require("../config/config");
const bsURL = config.bsURL;
axios.defaults.headers.common["Authorization"] =config.accessToken;

module.exports = {
  LocationIntent: function(location) {
    console.log("location ", location.value);
    if (location) {
      axios
        .get(bsURL, {
          params: {
            location: location.value
          }
        })
        .then(response => {
          console.log("response ", response.data.businesses);
          const speech =  "I found " + 
          response.data.total +
          " restaurants in ",
          location,
          "location. You can filter restaurants based on their name or recipe name. Would like to do that?";
        
          this.ask(
           );
        });
    }
  }
};
