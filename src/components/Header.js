import React, { useContext } from 'react';
import cartContext from '../context/cartContext';


const Header = () => {

    const { cartItems, toggleCart } = useContext(cartContext);

    const cartQuantity = cartItems.length;

    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="navbar">
                        <h2 className="logo">FoodieHub</h2>
                        <h3 className="about">Satisfy your cravings with our delectable dishes !!</h3>
                        <div className="nav_menu">
                            <div
                                title="Cart"
                                className="cart_icon"
                                onClick={() => toggleCart(true)}
                            >
                                {
                                    cartQuantity >= 1 && (<h2 className="badge">{cartQuantity}</h2>)
                                }
                                <img className="cart" src="/img/cart.png" alt="bag-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;