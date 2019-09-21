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

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get(`/products?page=${this.state.page}`);

    this.setState({
      products: [...this.state.products, ...response.data.products]
    });
  };

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
