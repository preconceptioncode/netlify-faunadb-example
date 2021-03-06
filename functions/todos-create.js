/* Import faunaDB sdk */
const faunadb = require("faunadb");

const headers = {
  "Access-Control-Allow-Origin": "Content-Type",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json"
};

/* configure faunaDB Client with our secret */
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

/* export our lambda function as named "handler" export */
exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST" || !event.body) {
    return {
      headers,
      statusCode: 200,
      body: "NOop"
    };
  }

  try {
    const data = JSON.parse(event.body);
    console.log("Function `todo-create` invoked", data);
    const todoItem = {
      data: data
    };
    /* construct the fauna query */
    return client
      .query(q.Create(q.Ref("classes/Todos"), todoItem))
      .then(response => {
        console.log("success", response);
        /* Success! return the response with statusCode 200 */
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(response)
        };
      })
      .catch(error => {
        console.log("error", error);
        /* Error! return the error with statusCode 400 */
        return {
          statusCode: 400,
          body: JSON.stringify(error)
        };
      });
  } catch (error) {
    return {
      headers,
      statusCode: 500,
      body: "err"
    };
  }
  /* parse the string body into a useable JS object */
};
