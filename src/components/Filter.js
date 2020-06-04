import React, { Component } from "react";
import { connect } from "react-redux";
import {filterByType } from "../actions/productActions";

class Filter extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div className="loadingWrapper"></div>
    ) : (
      <div className="filter"> 
        <div className="filter-result box-left">
          <h3>Car In Stock</h3>
        </div>
        <div className="box-right">
          <input type ="text" name="productName" className = "textbox" placeholder="Type to Filter" onChange={(e) =>
              this.props.filterByType(this.props.products, e.target.value)
            }/>
        </div>
        <div className="filter-result">
          {this.props.filteredProducts.length === 0 && <div className="no-rec">No Cars with that name were found :(</div> } 
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterByType
  }
)(Filter);
