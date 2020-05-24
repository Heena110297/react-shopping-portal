import * as React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { loadMobile } from "./../store/actions/actions";

class MobileDetail extends React.Component {
  componentDidMount() {
    const selectedMobile = this.props.location.state.selectedMobile;
    this.props.loadMobile(selectedMobile);
  }

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
    if (this.props.loading) {
      return <div>Loading</div>;
    }
    if (this.props.error) {
      return <div style={{ color: "red" }}>ERROR: {this.props.error}</div>;
    }
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">
              <div align="center" justifycontent="center">
                <Image
                  src={this.props.data.image}
                  height="300px"
                  width="auto"
                ></Image>
              </div>
            </th>
          </tr>
          <tr>
            <th>Brand</th>
            <td width="630">{this.props.data.brand}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{this.props.data.name}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td><i className="fa fa-inr"></i> {this.props.data.price}</td>
          </tr>
          <tr>
            <th>Display</th>
            <td>{this.props.data.display}</td>
          </tr>
          <tr>
            <th>Battery</th>
            <td>{this.props.data.battery}</td>
          </tr>
          <tr>
            <th colSpan="2">
              <div justifycontent="center" align="center">
                <Button onClick={() => this.addToCart(this.props.data)}>
                  Add to Cart
                </Button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody />
      </Table>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart,
  data: state.data,
  loading: state.loading,
  error: state.error,
});
const mapDispatchToProps = {
  loadMobile,
};
export default connect(mapStateToProps, mapDispatchToProps)(MobileDetail);
