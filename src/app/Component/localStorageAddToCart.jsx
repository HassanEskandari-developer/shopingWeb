
export const getCartItems = () => {
  try {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
  } catch (error) {
    console.error('Error parsing cart items from localStorage:', error);
    return [];
  }
};

// No need for quantity logic here as CartContext handles it.
export const addToCart = (item) => {
  try {
    const cartItems = getCartItems();
    const updatedCart = [...cartItems, item];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  } catch (error) {
    console.error('Error saving item to cart in localStorage:', error);
  }
};

export const removeFromCart = (itemId) => {
  try {
    const cartItems = getCartItems();
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  } catch (error) {
    console.error('Error removing item from cart in localStorage:', error);
  }
};

export const clearCart = () => {
  localStorage.removeItem('cartItems');
};