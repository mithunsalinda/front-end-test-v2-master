import React, { Component } from "react";
import { connect } from "react-redux";
import logo from '../assets/mb-star.svg';
import logoText from '../assets/mb-wordmark.svg';
import cartImage from '../assets/shoppingBag.png';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { cartItems } = this.props;
    return (   
        <header>
          <div className = "logo-wrap">
            <div className="logo-sec">
              <img src={logo} className="logo" alt="mercedes benz" title="Mercedes Benz"/>
              <img src={logoText} className="logo-text" alt="mercedes benz" title="Mercedes Benz"/>
            </div>
            <div className="cart-wrap">
                <p className="price">{cartItems.reduce((a, c) => a + c.price * c.count, 0)} &euro; <img src={cartImage} className="cart-logo" alt="mercedes benz" title="Mercedes Benz"/></p>
            </div>
          </div>
         </header>
    );
  }
}
export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
  }),
)(Cart);
