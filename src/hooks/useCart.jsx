import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure"
import {
    useQuery,
} from '@tanstack/react-query'


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cartItems?email=${user.email}`)
            return res.data
        }
    })
    return [cart, refetch]
}

export default useCart;