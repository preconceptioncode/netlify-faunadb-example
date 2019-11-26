/* Api methods to call /functions */

const create = async data => {
  const response = await fetch(
    "https://tntbhn1sdhd.SANDBOX.verygoodproxy.com/.netlify/functions/todos-create",
    {
      body: JSON.stringify(data),
      method: "POST",
      headers: { "Content-type": "application/json" }
    }
  );
  return await response.json();
};

const readAll = async () => {
  const response = await fetch(`/.netlify/functions/read`, {
    body: JSON.stringify({
      url:
        "https://tntbhn1sdhd.SANDBOX.verygoodproxy.com/.netlify/functions/todos-read-all"
    }),
    headers: { "Content-type": "application/json" },
    method: "POST"
  });
  return await response.json();
};

const update = async (todoId, data) => {
  const response = await fetch(
    "https://tntbhn1sdhd.SANDBOX.verygoodproxy.com/.netlify/functions/todos-update",
    {
      body: JSON.stringify({ data, todoId }),
      method: "POST",
      headers: { "Content-type": "application/json" }
    }
  );
  return await response.json();
};

const deleteTodo = async todoId => {
  const response = await fetch(`/.netlify/functions/todos-delete/${todoId}`, {
    method: "POST"
  });
  return await response.json();
};

const batchDeleteTodo = async todoIds => {
  const response = await fetch(`/.netlify/functions/todos-delete-batch`, {
    body: JSON.stringify({
      ids: todoIds
    }),
    method: "POST"
  });
  return await response.json();
};

export default {
  create: create,
  readAll: readAll,
  update: update,
  delete: deleteTodo,
  batchDelete: batchDeleteTodo
};
