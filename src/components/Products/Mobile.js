import * as React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "react-bootstrap/Pagination";

import {
  loadMobiles,
  addItemToCart,
  onSearch,
  onClear
} from "../../store/actions/actions";

import SearchBar from "../SearchBar/SearchBar";
class Mobiles extends React.Component {
  constructor(props) {
    super(props);
    this.productsToDisplay = [];
    this.state = {
      showSortedList: false,
      currentPage: 1,
      itemsPerPage: 3,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleOnClearButtonClick = this.handleOnClearButtonClick.bind(this);
  }

  componentDidMount() {
    this.props.loadMobiles();
  }

  viewDetails(id) {
    this.props.history.push("/detail", { selectedMobile: id });
  }

  addToCart = (item) => {
    this.props.addItemToCart(item);
  };

  handlePageChange(event) {
    this.setState({currentPage: Number(event.target.text) });
  }
  handleOnClearButtonClick(){
    this.props.onClear();
    this.forceUpdate();
  }

  sortByPriceLowToHigh = () => {
    this.productsToDisplay.sort((item1, item2) => item1.price - item2.price);
    this.setState({ showSortedList: !this.state.showSortedList });
  };

  sortByPriceHighToLow = () => {
    this.productsToDisplay.sort((item1, item2) => item2.price - item1.price);
    this.setState({ showSortedList: !this.state.showSortedList });
  };
  render() {
    if (this.props.loading) {
      return <div>Loading</div>;
    }
    if (this.props.error) {
      return <div style={{ color: "red" }}>ERROR: {this.props.error}</div>;
    }
    this.props.showSearchResults
      ? (this.productsToDisplay = this.props.searchResult)
      : (this.productsToDisplay = this.props.data);
    if (this.productsToDisplay.length > 0) {
      const indexOfLastProduct =
        this.state.currentPage * this.state.itemsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - this.state.itemsPerPage;
      const currentProducts = this.productsToDisplay.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      );
      let items = [];
      let count = 1;
      for (
        let number = 1;
        number <= this.productsToDisplay.length;
        count++, number = number + this.state.itemsPerPage
      ) {
        items.push(
          <Pagination.Item
            key={count}
            active={count === this.state.currentPage}
          >
            {count}
          </Pagination.Item>
        );
      }
      const renderProducts = currentProducts.map((product) => {
        return (
          <tr key={product.id}>
            <td>
              <Image src={product.image} height="100px" width="auto"></Image>{" "}
            </td>
            <td>{product.name}</td>
            <td>
              <i className="fa fa-inr"></i> {product.price}
            </td>
            <td>
              <Button onClick={() => this.viewDetails(product.id)}>
                View Details
              </Button>
            </td>
            <td>
              <Button onClick={() => this.addToCart(product)}>
                Add to cart
              </Button>
            </td>
          </tr>
        );
      });
      return (
        <div >
         <div style={{display: "flex"}}>
         <SearchBar ></SearchBar>
         <Button
              style={{ marginLeft: "0.5%" }}
              onClick={this.handleOnClearButtonClick}
            >
              Clear
            </Button>
          <DropdownButton style={{marginLeft : "3%" }} id="dropdown-basic-button" title="Sort">
            <Dropdown.Item onClick={this.sortByPriceHighToLow}>
              Price: High to Low
            </Dropdown.Item>
            <Dropdown.Item onClick={this.sortByPriceLowToHigh}>
              Price: Low to High
            </Dropdown.Item>
          </DropdownButton>
          </div>
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
            <tbody>{renderProducts}</tbody>
          </Table>
          <div style={{marginLeft:"50%"}}>
          <Pagination  onClick={this.handlePageChange}>{items}</Pagination>
          </div>
        </div>
      );
    } else {
      return <div><strong>No Mobiles found.Please Explore other options</strong> </div>;
    }
  }
}
const mapStateToProps = (state) => ({
  cart: state.cr.cart,
  searchResult: state.pr.searchResult,
  showSearchResults: state.pr.showSearchResults,
  data: state.pr.data,
  loading: state.pr.loading,
  error: state.pr.error,
});
const mapDispatchToProps = {
  loadMobiles,
  addItemToCart,
  onSearch,
  onClear
};
export default connect(mapStateToProps, mapDispatchToProps)(Mobiles);
