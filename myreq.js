const axios = require("axios");
const config = require("./config/config");
axios.defaults.headers.common.Authorization =
  "Bearer IZzYffjke4PoxRBnZiNcjKJXDqFpuFQRfpqjH2KX9o6Eiw1vOocPGtaJHAlm6vyU2p_B177cChG9QnRY0Koj7y6EFMedEF47MliG0qoWGghZcp70TPCpLJQ7-QjsW3Yx";
const id = "GuruNpVhiDvrQaQa0arvoQ";
const url = config.bDetailsURL + id;
axios
  .get(url)
  .then(response => {
    console.log("response ", response.data);
  })
  .catch(err => console.log("er", err));
