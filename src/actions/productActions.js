import { FETCH_PRODUCTS } from "../types";
import { FILTER_PRODUCTS_TYPE } from "../types";
export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};
export const filterByType = (products, filterType) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_TYPE,
    payload: {
      filterType: filterType,
      items:
      filterType === ""
          ? products
          : products.filter((product) => {
            return product.name.split(' ').join('').toLowerCase().indexOf(
                filterType.split(' ').join('').toLowerCase()) !== -1;
        }
    )
    },
  });
};