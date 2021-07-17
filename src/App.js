import React, { useState } from "react";
import "./App.css";
import data from "./data/products.json";
import ProductCard from "./components/ProductCard";
import CartCard from "./components/CartCard";

function App() {
  const products = data.products;
  const [items, setItems] = useState([]);

  function updateStateAddItem(buyProduct) {
    setItems((items) => [...items, buyProduct]);
  }

  function calculateTotal() {
    let total = items.length
      ? items.reduce((total, item) => total + item.qty * item.cost, 0)
      : 0;
    return total;
  }

  function removeItemFromCart(id) {
    setItems((items) => {
      return items.filter((item) => {
        return item.key !== id;
      });
    });
  }

  function updateItemInCart(id, newQty) {
    let listItems = [...items];
    listItems.forEach((item) => {
      if (item.key === id) {
        item.qty = Number(newQty);
      }
    });
    setItems(listItems);
  }

  return (
    <div>
      <div class="row">
        <div class="col-12 col-md-9 products-column p-4">
          <div class="row product-heading p-4">
            <div class="col-12 mx-auto">
              <h3 class="section-heading">Products</h3>
            </div>
          </div>
          <div class="row product-cards p-4">
            {products.map((prod) => (
              <ProductCard
                data={prod}
                key={prod._id}
                updateState={updateStateAddItem}
                cartItems={items}
              />
            ))}
          </div>
        </div>
        <div class="col-12 col-lg-3 cart-column p-4">
          <div class="row cart-heading p-4">
            <div class="col-12 mx-auto">
              <h3 class="section-heading">Cart</h3>
            </div>
          </div>
          <div class="row cart-cards p-4">
            <div class="container vertical-scrollable">
              {items.length > 0 ? (
                items.map((item) => (
                  <CartCard
                    data={item}
                    key={item._id}
                    onDelete={removeItemFromCart}
                    onUpdate={updateItemInCart}
                  />
                ))
              ) : (
                <div class="row cart-cards p-4">
                  <div>Add an item in cart</div>
                </div>
              )}
            </div>
          </div>
          <div class="row cart-total mx-auto ">
            <span class="h5 col-6">
              <strong>Total</strong>
            </span>
            <span class="h4 col-6">
              <strong>{calculateTotal()}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
