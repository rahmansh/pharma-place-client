import axios from "axios";

const useAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL: 'https://pharma-place-server.vercel.app/'
    })
    return axiosPublic;
};

export default useAxiosPublic;