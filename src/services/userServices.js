import { instance } from "./instance";

// define the user services
const userServices = {
    // register a user
    register: async (name, email, password) => {
        // make a POST request to the server
        return await instance.post('/users/register', {
            name,
            email,
            password
        });
    },
    // login a user
    login: async (email, password) => {
        // make a POST request to the server
        return await instance.post('/users/login', {
            email,
            password
        }, {
            withCredentials: true
        });
    },
}

export default userServices;