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
export { addTodo ,getTodos};