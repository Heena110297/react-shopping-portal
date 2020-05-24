import * as React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { loadMobiles } from "./../store/actions/actions";
class Mobiles extends React.Component {
  componentDidMount() {
    this.props.loadMobiles();
  }

  viewDetails(id) {
    this.props.history.push("/detail", { selectedMobile: id });
  }

  addToCart = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    if (cart) {
      const existingProduct = cart.filter((p) => {
        return p.id === id;
      });
      if (existingProduct.length > 0) {
        existingProduct.map((p) => {
          p.id = id;
          p.qty = p.qty + 1;
          return p;
        });
      } else {
        cart.push({
          id: id,
          qty: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const newProduct = [
        {
          id: id,
          qty: 1,
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
    if (this.props.data.length > 0) {
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Details</th>
              <th>Add to cart</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((u) => (
              <tr key={u.id}>
                <td>
                  <Image src={u.image} height="100px" width="auto"></Image>{" "}
                </td>
                <td>{u.brand}</td>
                <td>{u.price}</td>
                <td>
                  <Button onClick={() => this.viewDetails(u.id)}>
                    View Details
                  </Button>
                </td>
                <td>
                  <Button onClick={() => this.addToCart(u.id)}>Add to cart</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }
    else{
      return(
        <div> 
          No Mobiles found . Rendered from mobiles component       
        </div>
      )
    }
  }
}
const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});
const mapDispatchToProps = {
  loadMobiles
};
export default connect(mapStateToProps, mapDispatchToProps)(Mobiles);