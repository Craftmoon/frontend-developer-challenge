import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import ProductGrid from "./components/product-grid";
import ShareForm from "./components/share-form";

function App() {
  return (
    <main>
      <Header />
      <ProductGrid />
      <ShareForm />
      <Footer />
    </main>
  );
}

export default App;
