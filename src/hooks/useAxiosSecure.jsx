import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5003'
})

const useAxiosSecure = () => {
    return axiosSecure;
}

export default useAxiosSecure;