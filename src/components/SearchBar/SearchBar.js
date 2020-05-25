import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { connect } from "react-redux";
import { onSearch, onClear} from "../../store/actions/actions";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleOnSearchButtonClick = this.handleOnSearchButtonClick.bind(this);
  }


  handleOnInputChange = (event) => {
    const query = event.target.value;
    console.log(query);
    this.setState({ query, loading: true, message: "" });
  };

  handleOnSearchButtonClick() {
    if (this.state.query !== "") {
      console.log(this);
      this.props.onSearch(this.state.query);
      this.props.history.push("/");
    } else if (this.state.query === "") {
      console.log("empty");
      this.props.history.push("/");
    }
  }

  

  render() {
    return (
      <div>
        <Form inline>
          <FormControl
            className="mr-sm-2"
            placeholder="Search..."
            aria-label="search"
            aria-describedby="basic-addon1"
            onChange={this.handleOnInputChange}
          />
          <div style={{ display: "flex" }}>
            <Button onClick={this.handleOnSearchButtonClick}>Search</Button>
          </div>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cr.cart,
  searchResult: state.pr.searchResult,
  data: state.pr.data,
  loading: state.pr.loading,
  error: state.pr.error,
});

const mapDispatchToProps = {
  onSearch,
  onClear
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchBar)
);
