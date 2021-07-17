import React, { useState } from "react";

function CartCard(props) {
  function handleDelete(id) {
    props.onDelete(id);
  }

  function handleUpdate(id, newQty) {
    props.onUpdate(id, newQty);
  }

  return (
    <div class="card mb-3 cart-card">
      <div class="row g-0">
        <div class="col-12 col-xl-4">
          <img
            src={props.data.image}
            class="img-fluid rounded tile-img"
            alt="..."
          />
          <div class="d-grid gap-2 col-12 mx-auto p-2">
            <button
              class="btn btn-danger"
              onClick={() => handleDelete(props.data.key)}
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
        <div class="col-12 col-xl-8">
          <div class="card-body">
            <h5 class="card-title">
              <strong>{props.data.name}</strong>
            </h5>
            <p class="card-text available-text">
              Availability: {props.data.availability}
            </p>
            <p class="card-text">
              <big class="text-muted">${props.data.cost}</big>
            </p>
            <span>Qty: </span>
            <input
              min="1"
              type="number"
              defaultValue="1"
              name="prodQuantity"
              class="product-quantity"
              onChange={(e) => handleUpdate(props.data.key, e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
