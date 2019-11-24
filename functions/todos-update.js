const faunadb = require("faunadb");
const getId = require("./utils/getId");

const headers = {
  "Access-Control-Allow-Origin": "Content-Type",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json"
};

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = (event, context) => {
  const data = JSON.parse(event.body);
  console.log(data);
  console.log(`Function 'todo-update' invoked. update id: ${id}`);
  return client
    .query(q.Update(q.Ref(`classes/Todos/${id}`), { data }))
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
        statusCode: 400,
        body: JSON.stringify(error)
      };
    });
};
