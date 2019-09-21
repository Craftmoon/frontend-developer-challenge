import React, { Component } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductsGrid from "../../components/products-grid";
import ShareForm from "../../components/share-form";
import api from "../../services/api";

class CustomProductList extends Component {
  state = {
    products: [],
    page: 1
  };

  /* Function called when this component (page) finishes mounting */
  componentDidMount() {
    this.loadProducts();
  }

  /* Calls the api to get the next page products */
  loadProducts = async () => {
    const response = await api.get(`/products?page=${this.state.page}`);

    this.setState({
      products: [...this.state.products, ...response.data.products]
    });
  };

  /* Function called when the button for loading more products is clicked */
  handleClick = () => {
    const page = this.state.page + 1;
    this.setState({ page }, () => {
      this.loadProducts();
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <ProductsGrid
          products={this.state.products}
          onRequest={this.handleClick}
        />
        <ShareForm />
        <Footer />
      </React.Fragment>
    );
  }
}

export default CustomProductList;
