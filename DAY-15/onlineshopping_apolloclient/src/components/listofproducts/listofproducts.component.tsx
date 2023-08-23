import { useQuery } from "@apollo/client";
import { GETALLPRODUCTS } from "../../graphql/querries";
import { ProductModel } from "../../models/product.model";
import Product from "../product/product.component";

let ListOfProducts: React.FC = () => {
  let { loading, error, data } = useQuery(GETALLPRODUCTS);
  if (loading) return <>"Loading.."</>;
  if (error) return <>`Error : ${error?.message}`</>;
  return (
    <>
      <header>
        <h1>List Of Products</h1>
      </header>

      <main className="row">
        {data?.products?.map((product: ProductModel) => (
          <Product productdetails={product} key={product.id} />
        ))}
      </main>
    </>
  );
};

export default ListOfProducts;
