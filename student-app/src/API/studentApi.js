import axios from "axios";

export const getStudents = async () => {
    try {
        const response = await axios.get("http://localhost:5000/getStudents");
        return response.data;
    } catch (error) {
        console.error("Error fetching students:", error);
        throw error;
    }
}