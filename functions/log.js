const axios = require("axios");

exports.handler = async () => {
  try {
    const response = await axios.post(
      "https://tntbhn1sdhd.SANDBOX.verygoodproxy.com/.netlify/functions/todos-create",
      { title: "Sean", completed: false }
    );
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: response.data,
        status: "succeeded",
        connected: true,
        authenticated: true
      })
    };
  } catch (error) {
    console.log("LogIn Failed: Transaction ID", error.transaction_id);
    console.log("ERROR", error); // output to netlify function log
    return {
      statusCode: 200,
      body: JSON.stringify({
        error,
        connected: true,
        authenticated: false,
        status: "failed"
      }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
