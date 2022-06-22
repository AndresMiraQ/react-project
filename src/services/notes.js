import axios from "axios";
const baseUrl = 'http://localhost:3001/api/notes';


export const getAll = async () => {
    const nonExisting = {
        id: 10000,
        content: 'This page does no exist',
        date : new Date(),
        important: true
    };

    const response = await axios.get(baseUrl);
    return response.data.concat(nonExisting);
}


export const create = async (newObject) => {
    const response = await axios.post(baseUrl, newObject);
    return response.data;
}

export const update = async (id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject);
    return response.data;
}