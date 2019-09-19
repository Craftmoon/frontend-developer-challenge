import React, { Component } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductGrid from "../../components/products-grid";
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
    console.log("page", this.state.page);
    console.log("response", response.data);

    this.setState({
      products: [...this.state.products, ...response.data.products]
    });
  };

  handleClick = () => {
    const page = this.state.page + 1;
    this.setState({ page }, () => {
      this.loadProducts();
    });
    console.log(this.state.products);
  };

  render() {
    return (
      <main>
        <Header />
        <ProductGrid
          products={this.state.products}
          onRequest={this.handleClick}
        />
        <ShareForm />
        <Footer />
      </main>
    );
  }
}

export default CustomProductList;
