import React from "react";
import './styles.scss';
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store";
import { Provider } from "react-redux";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Cart />
        <div className="grid-container">
          <main>
            <div className="container">
              <div className="main">
                <Filter></Filter>
                <Products></Products>
              </div>
              <footer>FE Change by mithun.salinda.j@gmail.com</footer>
            </div>
          </main>
        </div>
      </Provider>
    );
  }
}
export default App;
