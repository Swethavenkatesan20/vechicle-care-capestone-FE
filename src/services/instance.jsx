import axios from "axios";

//give base URL
const baseURL='https://vechicle-care-capestone-be-1.onrender.com/api';


const instance =axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers:{
        'Content-Type': 'application/json',
    }
});

const protectedInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export{instance,protectedInstance} ;
