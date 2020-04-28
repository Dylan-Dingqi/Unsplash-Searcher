import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: { 
        Authorization: "Client-ID M6SPgoxy19oMNJgZjqvOlWv3FJ9W1ojf0-q-vvjpxTw" 
    }
});