import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles";

import { CartContext } from "../../contexts/cart.context";

import Button from "../../components/button/button.component";
import CartItem from "../../components/cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
