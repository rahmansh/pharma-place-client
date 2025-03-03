import axios from "axios";

const useAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL: 'https://ph-assignment-12-server-seven.vercel.app'
    })
    return axiosPublic;
};

export default useAxiosPublic;