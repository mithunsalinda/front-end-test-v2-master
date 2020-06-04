import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import { removeFromCart } from "../actions/cartActions";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      cartItems : null,
    };
  }
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const itemsInBucket = this.props.cartItems.map((car)=>{   
      return car.name;   
    }); 
    return (
      <div>
          {!this.props.products ? (
            <div className="loadingWrapper"></div>
          ) : ( 
            <div className="products">
              {
              this.props.products.map((product) => (
                  <div className="product-Box" key={product._id}>
                      <h2 className="txth3">{product.name}</h2>
                      <div className="imageWrap"><img className="imageFullWidth" src={`.${product.imagePath}`} alt={product.name}></img></div>
                      <p className={(itemsInBucket.indexOf(product.name) > -1) ? "txtPrice txtInBag" : "txtPrice"}>{product.priceFormatted}</p>
                    
                    <div className="product-price">
                      {(itemsInBucket.indexOf(product.name) > -1) ? 
                      <button onClick={() => this.props.removeFromCart(product)} className="button remove" >
                        Remove from Shopping Bag
                      </button> : 
                       <button onClick={() => {this.props.addToCart(product);}} className="button add" >
                        Add to Shopping Bag
                      </button>
                      }
                    </div>
                  </div>
              ))
              }
            </div>
          )}
      </div>
    );
  }
}
export default connect(
  (state) => ({ products: state.products.filteredItems,cartItems: state.cart.cartItems, }),
  {
    fetchProducts,
    addToCart,
    removeFromCart
  }
)(Products);
