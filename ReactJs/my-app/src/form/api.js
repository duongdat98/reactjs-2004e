import axios from 'axios';

function login(data) {
    return axios.post(`https://medical-be.herokuapp.com/api/doctor/login`, data)
}

export { login }
