const { getDetails } = require("./utils");
const getResHtml = (businesses = [], dType) => {
  let returnValue = "";
  businesses.forEach(business => {
    const details = getDetails(business);
    returnValue = returnValue.concat(
      getResHeader(details.rname),
      getAddressBox(details)
    );
  });
  return returnValue.concat(getThanksMessage(dType), getFindoutMore());
};

const getResHeader = rname => `${getTableRowStyle()}${getTableRowTd()}
                        <center><h1><strong style="color: #118035">${rname}<strong/></h1></center>
                        </td></tr>`;

const getTableRowStyle = () => `<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; 
    font-size: 14px; margin: 0;">`;

const getTableRowTd = () => "<td class=\"content-block\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;\" valign=\"top\">";

const getAddressBox = details => {
  const address =
    `${getTableRowStyle()}${getTableRowTd()}` +
    "<strong style=\"color: #118035; font-size: 18px;\">Address</strong>" +
    "<strong class=\"street-address\">" +
    `<address>${details.a[0]}<br>${details.a[1]}<br>${details.a[2]}</address>` +
    `<br><a href="http://www.google.com/maps/place/${details.la},${
      details.lo
    }">Get Directions</a>` +
    `<br><a href="https://maps.google.com/maps?q='${details.pc}'">${
      details.pc
    }</a>` +
    `<br>phone no: ${details.pn}</strong>` +
    "</td>" +
    `${getImageTd(details)}</tr>`;
  return address;
};
const getImageTd = ({ iurl }) => `${getTableRowTd()} <img src="${iurl}" height="170" width="200" alt="picture"/></td>`;

const getThanksMessage = dType => `<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
<td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
  <center><h3><strong style="color: #118035">Thanks for using foodpedia with ${dType}!<strong/></h3></center>
</td>
</tr>`;

const getFindoutMore = () => `<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; margin: 0;">
<td class="content-block" itemprop="handler" itemscope itemtype="http://schema.org/HttpActionHandler" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 14px;" valign="top">
  <center><a href="http://www.foodpedia.uk" class="btn-primary text-center" itemprop="url" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 6px 20px;">Find out more at www.foodpedia.uk</a></center>
</td>
</tr>`;
module.exports = {
  getResHeader,
  getTableRowStyle,
  getThanksMessage,
  getFindoutMore,
  getResHtml
};
