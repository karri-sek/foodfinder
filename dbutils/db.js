const AWS = require("aws-sdk");
const TABLE_NAME = "session";
const saveSession = (userId, locale, sessionData) => {
  const params = {
    TableName: TABLE_NAME,
    Item: {
      userId,
      locale,
      session: sessionData
    }
  };

  const documentClient = new AWS.DynamoDB.DocumentClient();

  documentClient.put(params, (err, data) => {
    if (err) console.error("error in saving session Data:", err);
    console.log("Session Data saved: ", data);
  });
};

const getSession = (userId, locale) => {
  console.log(" hash unileverId to get Preferenes:", huid);
  const params = {
    TableName: TABLE_NAME,
    Key: {
      userId,
      locale
    }
  };

  const documentClient = new AWS.DynamoDB.DocumentClient();

  return documentClient.get(params).promise();
};

module.exports = { saveSession,
getSession };
