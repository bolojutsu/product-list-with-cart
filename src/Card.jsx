import { useState } from 'react';

const Card = ({ dessert, addToCart, removeFromCart, cart }) => {
    // Get the quantity of this dessert in the cart
    let quantity = 0;
    if (cart.items[dessert.name]) {
        quantity = cart.items[dessert.name].quantity;
    }

    // Set image class based on cart status
    let imageClass = 'dessert-image';
    if (quantity > 0) {
        imageClass = 'dessert-image in-cart';
    }

    // Show counter if in cart, else show Add to Cart
    if (quantity > 0) {
        return (
            <div className="dessert-card">
                <img
                    src={dessert.image.thumbnail}
                    alt={dessert.name}
                    className={imageClass}
                />
                <p className="dessert-category">{dessert.category}</p>
                <h3 className="dessert-name">{dessert.name}</h3>
                <p className="dessert-price">
                    ${dessert.price.toFixed(2)}
                </p>
                <div className="cart-counter">
                    <button className="counter-btn" onClick={() => removeFromCart(dessert.name)}>-</button>
                    <span className="counter-qty">{quantity}</span>
                    <button className="counter-btn" onClick={() => addToCart(dessert)}>+</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="dessert-card">
                <img
                    src={dessert.image.thumbnail}
                    alt={dessert.name}
                    className={imageClass}
                />
                <p className="dessert-category">{dessert.category}</p>
                <h3 className="dessert-name">{dessert.name}</h3>
                <p className="dessert-price">
                    ${dessert.price.toFixed(2)}
                </p>
                <button className="add-to-cart-button" onClick={() => addToCart(dessert)}>
                    <img src="/images/icon-add-to-cart.svg" className="cart-image" alt="" />
                    <p>Add to Cart</p>
                </button>
            </div>
        );
    }
};

export default Card;