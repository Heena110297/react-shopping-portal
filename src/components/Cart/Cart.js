import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { addItemToCart ,removeItemFromCart } from "./../../store/actions/actions";
import { connect } from "react-redux";

class Cart extends Component {
  routeChange = () => {
    let path = "/dashboard";
    this.props.history.push(path);
  };
  addToCart = (item) => {
    this.props.addItemToCart(item);
    this.forceUpdate();
  };

  removeFromCart = (item) => {
    this.props.removeItemFromCart(item);
    this.forceUpdate();
  };
  render() {
    const cartItems = this.props.cart;
    console.log(cartItems);
    if (cartItems.length>0) {
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
                  <td>
                    <i className="fa fa-inr"></i> {item.price}
                  </td>
                  <td>
                    {item.qty}
                    <br></br>
                    <button onClick={() => this.addToCart(item)}>
                      <i className="fa fa-plus"></i>
                    </button>
                    <button onClick={() => this.removeFromCart(item)}>
                      <i className="fa fa-minus"></i>{" "}
                    </button>
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

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  addItemToCart,
  removeItemFromCart
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
