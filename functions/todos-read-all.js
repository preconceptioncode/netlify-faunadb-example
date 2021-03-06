/* Import faunaDB sdk */
const faunadb = require("faunadb");

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
  console.log("Function `todo-read-all` invoked");
  return client
    .query(q.Paginate(q.Match(q.Ref("indexes/allTodos"))))
    .then(response => {
      const todoRefs = response.data;
      console.log("Todo refs", todoRefs);
      console.log(`${todoRefs.length} todos found`);
      // create new query out of todo refs. http://bit.ly/2LG3MLg
      const getAllTodoDataQuery = todoRefs.map(ref => {
        return q.Get(ref);
      });
      // then query the refs
      return client.query(getAllTodoDataQuery).then(ret => {
        return {
          headers,
          statusCode: 200,
          body: JSON.stringify(ret)
        };
      });
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
