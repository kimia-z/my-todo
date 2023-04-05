import { createStore } from "vuex";
import TodoService from "@/services/TodoService";
import axios from "axios";

export default createStore({
  state: {
    todos: [],
    user: null,
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    doneTodos(state) {
      return state.todos.filter((todo) => todo.is_completed);
    },
  },
  mutations: {
    GET_TODOS(state, results) {
      state.todos = results;
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    DELETE_BUTTON(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    EDIT_TODO(state, [editTodo, id]) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.label = editTodo;
        }
        return todo;
      });
    },
    CHECK_COMPLETE(state, [id, checkComplete]) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.is_completed = checkComplete;
        }
        return todo;
      });
    },
    SET_USER_DATA(state, userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.access}`;
      state.user = userData;
    },
    LOGOUT() {
      localStorage.removeItem("user");
      location.reload();
    },
  },
  actions: {
    getTodos({ commit }) {
      return TodoService.getTodos().then((response) => {
        commit("GET_TODOS", response.data.results);
      });
    },
    createTodo({ commit }, todo) {
      return TodoService.postTodo(todo).then((response) => {
        commit("ADD_TODO", response.data);
      });
    },
    deleteTodo({ commit }, id) {
      return TodoService.deleteTodo(id).then(() => commit("DELETE_BUTTON", id));
    },
    editTodo({ commit }, [editedTodo, id]) {
      commit("EDIT_TODO", [editedTodo, id]);
      return TodoService.patchLabel(id, editedTodo);
    },
    checkComplete({ commit }, [id, checkComplete]) {
      commit("CHECK_COMPLETE", [id, checkComplete]);
      return TodoService.patchComplete(id, checkComplete);
    },
    login({ commit }, response) {
      commit("SET_USER_DATA", response.data);
    },
    logout({ commit }) {
      commit("LOGOUT");
    },
  },
});
