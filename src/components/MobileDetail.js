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
            <th colSpan="2"  >
              <div align="center" justifyContent= "center">
              <Image src={this.props.data.image} height="300px" width="auto"></Image>
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
            <td>{this.props.data.price}</td>
          </tr>
          <tr>
            <th>Display</th>
            <td>{this.props.data.display}</td>
          </tr>
          <tr>
            <th>Battery</th>
            <td>{this.props.data.battery}</td>
          </tr>
          <th colSpan="2" >
              <div justifyContent= "center" align="center">
             <Button>
               Add to Cart 
             </Button>
             </div>
              </th>
        </thead>
        <tbody />
      </Table>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});
const mapDispatchToProps = {
  loadMobile,
};
export default connect(mapStateToProps, mapDispatchToProps)(MobileDetail);
