import axios from "axios";

/* Api methods to call /functions */

const create = data => {
  console.log(data);
  return axios.post(
    "https://tntbhn1sdhd.SANDBOX.verygoodproxy.com/post",
    { data },
    {
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, Content-type, Accept, X-Access-Token, X-Key",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
  return fetch("https://tntbhn1sdhd.SANDBOX.verygoodproxy.com/post", {
    body: JSON.stringify({ account_number: "1234000" }),
    mode: "no-cors",
    method: "POST",
    headers: {
      "Content-type": "application/json"
    }
  }).then(response => response.json());
};

const readAll = () => {
  return fetch("/.netlify/functions/todos-read-all").then(response => {
    return response.json();
  });
};

const update = (todoId, data) => {
  return fetch(`/.netlify/functions/todos-update/${todoId}`, {
    body: JSON.stringify(data),
    method: "POST"
  }).then(response => {
    return response.json();
  });
};

const deleteTodo = todoId => {
  return fetch(`/.netlify/functions/todos-delete/${todoId}`, {
    method: "POST"
  }).then(response => {
    return response.json();
  });
};

const batchDeleteTodo = todoIds => {
  return fetch(`/.netlify/functions/todos-delete-batch`, {
    body: JSON.stringify({
      ids: todoIds
    }),
    method: "POST"
  }).then(response => {
    return response.json();
  });
};

export default {
  create: create,
  readAll: readAll,
  update: update,
  delete: deleteTodo,
  batchDelete: batchDeleteTodo
};
