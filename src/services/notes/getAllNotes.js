import axios from "axios";

export const getAllNotes = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            return response.data;
        });
    }