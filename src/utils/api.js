/* Api methods to call /functions */

const create = data => {
  return fetch("https://tntbhn1sdhd.SANDBOX.verygoodproxy.com/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ account_number: "ACC00000000000000000" })
  }).then(response => {
    return response.json();
  });
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
