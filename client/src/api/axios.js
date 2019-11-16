import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const baseURL = "http://151.80.42.162:8080";

const api = axios.create({
    baseURL: baseURL
});

function setUsername(username) {
    cookies.set("username", username, { path: "/" });
}

function getUsername() {
    return cookies.get("username");
}


export default api;
export { setUsername, getUsername };