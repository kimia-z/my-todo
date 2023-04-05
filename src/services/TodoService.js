import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:8200/api",
  withCredentials: false,
});

export default {
  getTodos() {
    return axios.get("http://localhost:8200/api/todo");
  },
  postTodo(todo) {
    return axios.post("http://localhost:8200/api/todo", { label: todo });
  },
  deleteTodo(id) {
    return axios.delete("http://localhost:8200/api/todo/" + id);
  },
  patchLabel(id, editedTodo) {
    return axios.patch("http://localhost:8200/api/todo/" + id, {
      label: editedTodo,
    });
  },
  patchComplete(id, checkComplete) {
    return axios.patch("http://localhost:8200/api/todo/" + id, {
      is_completed: checkComplete,
    });
  },
  postRegister(username, password) {
    return axios.post("http://localhost:8200/api/account/register", {
      username: username,
      password: password,
    });
  },
  postLogin(username, password) {
    return apiClient.post("/account/login", {
      username: username,
      password: password,
    });
  },
};
