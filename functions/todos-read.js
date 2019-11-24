/* Import faunaDB sdk */
const faunadb = require("faunadb");
const getId = require("./utils/getId");

const headers = {
  "Access-Control-Allow-Origin": "Content-Type",
  "Access-Control-Allow-Headers": "*"
};

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = (event, context) => {
  const id = getId(event.path);
  console.log(`Function 'todo-read' invoked. Read id: ${id}`);
  return client
    .query(q.Get(q.Ref(`classes/todos/${id}`)))
    .then(response => {
      console.log("success", response);
      return {
        headers,
        statusCode: 200,
        body: JSON.stringify(response)
      };
    })
    .catch(error => {
      console.log("error", error);
      return {
        headers,
        statusCode: 400,
        body: JSON.stringify(error)
      };
    });
};
