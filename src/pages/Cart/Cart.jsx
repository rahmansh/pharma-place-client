import useCart from "../../hooks/useCart";

const Cart = () => {
    const [cart, refetch] = useCart();
    console.log(cart)

    return (
        <div>
            <h1>Cart</h1>
        </div>
    );
};

export default Cart;