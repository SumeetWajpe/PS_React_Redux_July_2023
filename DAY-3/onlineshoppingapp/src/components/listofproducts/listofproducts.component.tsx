import React, { Component } from "react";
import { ProductModel } from "../../models/product.model";
import Product from "../product/product.component";

type ListOfProductsState = {
  products: ProductModel[];
};

export default class ListOfProducts extends Component<{}, ListOfProductsState> {
  state: Readonly<ListOfProductsState> = { products: [] };

  componentDidMount(): void {
    // ajax | fetch |  axios
    fetch("http://localhost:3500/products")
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  DeleteProduct(id: number): void {
    console.log(`Within Delete Product -  ${id}`);
    let newProducts = this.state.products.filter(p => p.id !== id);
    this.setState({ products: newProducts });
  }
  render() {
    return (
      <>
        <header>
          <h1>List Of Products</h1>
        </header>
        <main className="row">
          {this.state.products.map(product => (
            <Product
              productdetails={product}
              key={product.id}
              DeleteProduct={(theId: number) => this.DeleteProduct(theId)}
            />
          ))}
        </main>
      </>
    );
  }
}
