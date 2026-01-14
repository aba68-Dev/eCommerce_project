const cartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload; // 1. Define 'product' first
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        // 2. Now you can safely use 'product' here
        (item) => item.product._id === product.id
      );

      if (productIndex === -1) {
        updatedCart.push({ product: product, quantity: quantity });
      } else {
        updatedCart[productIndex].quantity += quantity;
      }

      return updatedCart;

    case "GET_CART":
      return action.payload.products;

    case "REVERT_CART":
      return action.payload.cart;

    case "REMOVE_FROM_CART":
      const oldCart = [...cart];
      const newCart = oldCart.filter(
        (item) => item.product._id !== action.payload.id
      );
      return newCart;
  }
};

export default cartReducer;
