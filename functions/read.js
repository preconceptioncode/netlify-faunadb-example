const axios = require("axios");

const username = "USvZ1XJ39yoGhRWiB5Qe5am";
const password = "34d671c5-414d-42c6-89a8-d751c04e57a3";

const headers = {
  "Access-Control-Allow-Origin": "Content-Type",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json"
};

exports.handler = async event => {
  const data = JSON.parse(event.body);
  const { url } = data;
  try {
    const response = await axios.post(url, {
      headers: {
        Authorization:
          "Basic " + Buffer.from(username + ":" + password).toString("base64"),
        "Content-Type": "application/json"
      }
    });
    console.log("Proxy Data", response.data);
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: response.data
      })
    };
  } catch (error) {
    console.log("LogIn Failed: Transaction ID", error.transaction_id);
    console.log("ERROR", error); // output to netlify function log
    return {
      statusCode: 200,
      body: JSON.stringify({
        error
      }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
