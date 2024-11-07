
"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCartItems, removeFromCart, clearCart } from '../Component/localStorageAddToCart';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Initialize cartItems from localStorage on component mount
    useEffect(() => {
        const savedCartItems = getCartItems();
        setCartItems(savedCartItems);
    }, []);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            // Check if item already exists in the cart
            const existingItemIndex = prevItems.findIndex(product => product.id === item.id);
            
            // Create a copy of the cart
            const updatedCart = [...prevItems];
    
            if (existingItemIndex > -1) {
                // Increment quantity if item exists
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    quantity: updatedCart[existingItemIndex].quantity + 1,
                };
            } else {
                // Add new item with quantity 1 if it doesn't exist
                updatedCart.push({ ...item, quantity: 1 });
            }
    
            // Update both state and localStorage at the same time
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };
    // Function to update item quantity in the cart
    const updateQuantity = (productId, quantity) => {
        setCartItems(prevItems => {
            const updatedCart = prevItems.map(item =>
                item.id === productId ? { ...item, quantity } : item
            );

            // Sync updated cart to localStorage
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    // Remove item from cart and sync with localStorage
    const handleRemoveFromCart = (itemId) => {
        setCartItems(prevItems => {
            const updatedCart = prevItems.filter(item => item.id !== itemId);
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    // Clear the cart and remove from localStorage
    const handleClearCart = () => {
        setCartItems([]);
        clearCart();
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart: handleRemoveFromCart, clearCart: handleClearCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);