const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const item = { ...updatedCart[index] };
        item.quantity++;
        updatedCart[index] = item;
      }
      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};

export default cartReducer;
