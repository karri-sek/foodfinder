const axios = require("axios");
const bsURL = "https://api.yelp.com/v3/businesses/search";
axios.defaults.headers.common.Authorization =
  "Bearer IZzYffjke4PoxRBnZiNcjKJXDqFpuFQRfpqjH2KX9o6Eiw1vOocPGtaJHAlm6vyU2p_B177cChG9QnRY0Koj7y6EFMedEF47MliG0qoWGghZcp70TPCpLJQ7-QjsW3Yx";
axios
  .get(bsURL, {
    params: {
      location: "London"
    }
  })
  .then(response => {
    console.log("response ", response.data.businesses);
  });
