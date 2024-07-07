// localStorageAddToCart.js
export const getCartItems = () => {
  if (typeof window !== "undefined") {
    try {
      const cartItems = localStorage.getItem('cartItems');
      return cartItems ? JSON.parse(cartItems) : [];
    } catch (error) {
      console.error('Error parsing cart items from localStorage:', error);
      return [];
    }
  }
  return [];
};

export const addToCart = (item) => {
  if (typeof window !== "undefined") {
    try {
      const cartItems = getCartItems();
      const existingProductIndex = cartItems.findIndex(product => product.id === item.id);
      if (existingProductIndex > -1) {
        const updatedCart = [...cartItems];
        updatedCart[existingProductIndex].quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      } else {
        let updatedCart = [...cartItems, item];
        const processedData = updatedCart.map(val => {
          if (!val.quantity) {
            return { ...val, quantity: 1 };
          }
          return val;
        });
        updatedCart = processedData
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      }
    } catch (error) {
      console.error('Error saving item to cart in localStorage:', error);
    }
  }
};

export const removeFromCart = (itemId) => {
  if (typeof window !== "undefined") {
    try {
      const cartItems = getCartItems();
      const updatedCart = cartItems.filter(item => item.id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error removing item from cart in localStorage:', error);
    }
  }
};

export const clearCart = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem('cartItems');
  }
};
