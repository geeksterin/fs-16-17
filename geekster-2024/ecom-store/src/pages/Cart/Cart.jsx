import { useContext } from "react";
import { CartContext } from "../../router";
import CartItemCard from "../../components/CartCard/CartCard";

const Cart = (props) => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      {cart?.items?.map((item) => (
        <CartItemCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Cart;

// history stack
// www.google.com -> click on gmail -> history.push
// www.google.com/gmail -> history.push
// www.google.com/gmail/important-mails

// history - push, replace

// www.google.com/gmail
