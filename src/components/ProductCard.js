import React, { useState } from "react";

function ProductCard(props) {
  function addToProducts() {
    let buyProduct = {};
    buyProduct["key"] = props.data._id;
    buyProduct["name"] = props.data.name;
    buyProduct["image"] = props.data.image;
    buyProduct["cost"] = props.data.cost;
    buyProduct["availability"] = props.data.availability;
    buyProduct["qty"] = 1;
    props.updateState(buyProduct);
  }

  function checkItemInCart(id) {
    let isPresentInCart = false;
    props.cartItems.forEach((item) => {
      if (item.key === id) {
        isPresentInCart = true;
      }
    });
    return isPresentInCart;
  }

  return (
    <div class="col-12 col-md-6 col-lg-3 mb-1">
      <div class="card mb-2">
        <p class="card-title h6"> {props.data.category}</p>
        <p class="card-text h4">
          {" "}
          <strong> {props.data.name}</strong>
        </p>
        <img
          src={props.data.image}
          class="card-img-top img-fluid rounded"
          alt="..."
        />
        <div class="card-body">
          <p className="h3 text-center">
            <strong>${props.data.cost}</strong>
          </p>
        </div>
        {!checkItemInCart(props.data._id) ? (
          <div class="d-grid col-12 mx-auto">
            <button className="btn btn-warning " onClick={addToProducts}>
              <p class="lead">Add to cart</p>
            </button>
          </div>
        ) : (
          <div class="d-grid col-12 mx-auto">
            <button className="btn btn-warning disabled">
              <p class="lead">Added</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
