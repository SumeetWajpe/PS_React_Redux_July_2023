import { useQuery } from "@apollo/client";
import { GETALLPRODUCTS } from "../../graphql/querries";
import { ProductModel } from "../../models/product.model";
import Product from "../product/product.component";
import { useState } from "react";

let ListOfProducts: React.FC = () => {
  const PAGE_SIZE = 3;
  const [page, setPage] = useState(0);
  let { loading, error, data } = useQuery(GETALLPRODUCTS, {
    variables: { limit: PAGE_SIZE, offset: PAGE_SIZE * page },
  });
  if (loading) return <>"Loading.."</>;
  if (error) return <>`Error : ${error?.message}`</>;
  return (
    <>
      <header>
        <h1>List Of Products</h1>
      </header>

      <main>
        <div className="row">
          {data?.products?.map((product: ProductModel) => (
            <Product productdetails={product} key={product.id} />
          ))}
        </div>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary"
            onClick={() => setPage(page - 1)}
            disabled={page == 0}
          >
            Prev
          </button>
          <div>Page {page + 1}</div>
          <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      </main>
    </>
  );
};

export default ListOfProducts;
