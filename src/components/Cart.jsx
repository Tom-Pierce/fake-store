import { useContext } from "react";
import { CartContext } from "../App";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const newCart = cart.toSorted((a, b) => a.id - b.id);
  return (
    <>
      {newCart.map((product) => {
        return <img key={product.id} src={product.image} alt="" />;
      })}
    </>
  );
};

export default Cart;
