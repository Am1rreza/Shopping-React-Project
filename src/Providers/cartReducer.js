const addToCart = (state, action) => {
  const updatedCart = [...state.cart];

  const index = updatedCart.findIndex((item) => item.id === action.payload.id);

  if (index < 0) {
    updatedCart.push({ ...action.payload, quantity: 1 });
  } else {
    const item = { ...updatedCart[index] };
    item.quantity++;
    updatedCart[index] = item;
  }

  return {
    ...state,
    cart: updatedCart,
    total: state.total + action.payload.offPrice,
  };
};

const decrementProduct = (state, action) => {
  const updatedCart = [...state.cart];

  const index = updatedCart.findIndex((item) => item.id === action.payload.id);

  const item = { ...updatedCart[index] };

  if (item.quantity === 1) {
    const filteredProducts = updatedCart.filter(
      (product) => product.id !== item.id
    );

    return {
      ...state,
      cart: filteredProducts,
      total: state.total - action.payload.offPrice,
    };
  } else {
    item.quantity--;
    updatedCart[index] = item;

    return {
      ...state,
      cart: updatedCart,
      total: state.total - action.payload.offPrice,
    };
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state, action);

    case "DECREMENT_PRODUCT":
      return decrementProduct(state, action);

    default:
      return state;
  }
};

export default cartReducer;
