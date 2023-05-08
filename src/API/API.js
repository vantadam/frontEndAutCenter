
import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:8080"});

export const signIn = (formData) => API.post("/api/auth/register", formData);
export const signUp = (formData) => API.post("/users/authenticate", formData);


export default Authentication