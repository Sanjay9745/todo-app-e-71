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

export { addTodo };