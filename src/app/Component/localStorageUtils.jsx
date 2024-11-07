
export const getProducts = (key) => {
  if (typeof window !== "undefined") {
    try {
      const savedLikes = JSON.parse(localStorage.getItem(key));
      return savedLikes || {};
    } catch (error) {
      console.error('Error parsing liked products from localStorage:', error);
      return {};
    }
  }
  return {};
};

export const setProducts = (key , value) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving liked products to localStorage:', error);
    }
  }
};

