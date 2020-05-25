import * as React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { loadMobiles, addItemToCart } from "../../store/actions/actions";
class Mobiles extends React.Component {
  componentDidMount() {
    this.props.loadMobiles();
  }

  viewDetails(id) {
    this.props.history.push("/detail", { selectedMobile: id });
  }

  addToCart = (item) => {
    this.props.addItemToCart(item);
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
        <div align ="center">
          <DropdownButton id="dropdown-basic-button" title="Sort">
            <Dropdown.Item href="#/action-1">Price: High to Low</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Price: Low to High</Dropdown.Item>
          </DropdownButton>
          <br></br>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
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
                  <td>{u.name}</td>
                  <td>
                    <i className="fa fa-inr"></i> {u.price}
                  </td>
                  <td>
                    <Button onClick={() => this.viewDetails(u.id)}>
                      View Details
                    </Button>
                  </td>
                  <td>
                    <Button onClick={() => this.addToCart(u)}>
                      Add to cart
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    } else {
      return <div>No Mobiles found . Rendered from mobiles component</div>;
    }
  }
}
const mapStateToProps = (state) => ({
  cart: state.cr.cart,
  data: state.pr.data,
  loading: state.pr.loading,
  error: state.pr.error,
});
const mapDispatchToProps = {
  loadMobiles,
  addItemToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Mobiles);
