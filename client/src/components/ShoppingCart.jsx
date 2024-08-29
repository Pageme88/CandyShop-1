import { useState } from "react";

const ShoppingCart = () => {
    // cart state: starts as empty array.
    const [cart, setCart] = useState([]);

    // function to add items:
    const addToCart = (candy) => {
        // checks if candy is already in cart.
        const existingItem = cart.find((item) => item.id === candy.id);
        // increase item quantity if candy is already in cart.
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === candy.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                )
            );
        } else {
            // If candy does not exist, add to cart with a quantity of 1.
            setCart([...candy, { ...candy, quantity: 1}]);
        }
    }
}

export default ShoppingCart;