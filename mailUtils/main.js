const { getHtmlHeader } = require("./htmlheader");
const { getbody } = require("./htmlbody");
const { getResHtml } = require("./getResHtml");
const { getFooterDiv } = require("./footer");
const { getTableLogo } = require("././tableHeaderWithLogo");

const getEmailHtml = (topRes = []) => `${getHtmlHeader()}${getbody()}${getTableLogo()}${getResHtml(
    topRes
  )}${getFooterDiv()}`;

module.exports = {
  getEmailHtml
};
