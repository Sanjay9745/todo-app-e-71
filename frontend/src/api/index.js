import axios from "axios";
const baseUrl = "http://localhost:8000";

const addTodo = async (todo) => {
  try {
    const response = await axios.post(`${baseUrl}/todos`, { text: todo });
    return response.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

const getTodos = async (todo) => {
  try {
    const response = await axios.get(`${baseUrl}/todos`);
    return response.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

const updateTodos = async (id, completed) => {
  try {
    const response = await axios.put(`${baseUrl}/todos/${id}`, { completed });
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};

export { addTodo, getTodos, updateTodos, deleteTodo };
