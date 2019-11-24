/* Api methods to call /functions */

const create = data => {
  return fetch(
    "https://tntbhn1sdhd.SANDBOX.verygoodproxy.com/.netlify/functions/todos-create",
    {
      body: JSON.stringify(data),
      method: "POST",
      headers: { "Content-type": "application/json" }
    }
  ).then(response => {
    return response.json();
  });
};

const readAll = data => {
  return fetch(`/.netlify/functions/read`, {
    body: JSON.stringify({
      url:
        "https://tntbhn1sdhd.SANDBOX.verygoodproxy.com/.netlify/functions/todos-read-all"
    }),
    headers: { "Content-type": "application/json" },
    method: "POST"
  }).then(response => {
    return response.json();
  });
};

const update = (todoId, data) => {
  return fetch(
    "https://tntbhn1sdhd.SANDBOX.verygoodproxy.com/.netlify/functions/todos-update",
    {
      body: JSON.stringify({ data, todoId }),
      method: "POST",
      headers: { "Content-type": "application/json" }
    }
  ).then(response => {
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
