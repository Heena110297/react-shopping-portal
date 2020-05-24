import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

class Cart extends Component {
  routeChange = () => {
    let path = "/dashboard";
    this.props.history.push(path);
  };
  addToCart = (mobileDetail) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    if (cart) {
      const existingProduct = cart.filter((p) => {
        return p.id === mobileDetail.id;
      });
      if (existingProduct.length > 0) {
        existingProduct.map((p) => {
          p.id = mobileDetail.id;
          p.name = mobileDetail.name;
          p.price=mobileDetail.price;
          p.image = mobileDetail.image;
          p.qty = p.qty + 1;
          return p;
        });
      } else {
        cart.push({
          id: mobileDetail.id,
          name :mobileDetail.name,
          price:mobileDetail.price,
          image : mobileDetail.image,
          qty: 1
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const newProduct = [
        {
          id: mobileDetail.id,
          name :mobileDetail.name,
          price:mobileDetail.price,
          image : mobileDetail.image,
          qty: 1
        },
      ];
      localStorage.setItem("cart", JSON.stringify(newProduct));
      console.log(JSON.stringify(localStorage.getItem("cart")));
    }
  };
  render() {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    console.log(cartItems)
    if (cartItems) {
      return (
          <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price per unit</th>
              <th>Quantity</th>
              <th>Total price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <Image src={item.image} height="100px" width="auto"></Image>{" "}
                </td>
                <td>{item.name}</td>
                <td><i className="fa fa-inr"></i> {item.price}</td>
                <td>
                  {item.qty}
                  <br>
                  </br>
                  <button onClick={() => this.addToCart(item)} >
                  <i className="fa fa-plus"></i> 
                </button>
                  <button><i className="fa fa-minus"></i> </button>
                </td>
                <td>
                 <i className="fa fa-inr"></i> {item.qty * item.price}
                </td>
              </tr>
            ))}

          </tbody>
        </Table>
        </div>
      );
    } else {
      return (
        <div align="center">
          <h1>Add Items to your Cart ! ^_^ </h1>
          <br></br>
          <Button onClick={this.routeChange}>Go to Dashboard ! </Button>
        </div>
      );
    }
  }
}

export default Cart;
