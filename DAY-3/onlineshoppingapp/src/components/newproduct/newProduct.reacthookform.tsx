import React, { useState } from "react";
import { ProductModel } from "../../models/product.model";
import { useForm } from "react-hook-form";

type NewProductProps = {
  AddANewProduct: (newProduct: ProductModel) => void;
};

const NewProductWithHookForm = (props: NewProductProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductModel>({ mode: "all" }); // returns an object
  return (
    <>
      <header>
        <h1>New Product</h1>
      </header>
      <div className="d-flex justify-content-center align-items-center m-2">
        <form
          onSubmit={handleSubmit(
            ({ id, title, price, rating, imageUrl, description, likes }) => {
              let newProduct = new ProductModel(
                id,
                title,
                price,
                rating,
                likes,
                imageUrl,
                description,
              );
              props.AddANewProduct(newProduct);
            },
          )}
        >
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductId">Id : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtProductId"
                {...register("id", { required: true })}
              />

              {errors.id && <p style={{ color: "red" }}>Id is Required!</p>}
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductTitle">Title : </label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="txtProductTitle"
                {...register("title", {
                  required: true,
                  maxLength: {
                    value: 20,
                    message: "You exceeded 20 chars limit!",
                  },
                })}
              />
              {errors.title && (
                <p style={{ color: "red" }}>
                  {errors.title.type === "maxLength"
                    ? errors.title.message
                    : "Title is Required!"}
                </p>
              )}
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductPrice">Price : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtProductPrice"
                {...register("price")}
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductLikes">Likes : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtProductLikes"
                {...register("likes")}
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductRating">Rating : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtProductRating"
                {...register("rating")}
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductImage">Imageurl : </label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="txtProductImage"
                {...register("imageUrl")}
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductDescription">Description : </label>
            </div>
            <div className="col-md-4">
              <textarea
                id="txtProductDescription"
                cols={25}
                rows={5}
                {...register("description")}
              ></textarea>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4"></div>
            <div className="col-md-6">
              <button className="btn btn-success">Add Product</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewProductWithHookForm;

// import React, { useState } from "react";
// import { ProductModel } from "../../models/product.model";

// type NewProductProps = {
//   AddANewProduct: (newProduct: ProductModel) => void;
// };

// const NewProduct = (props: NewProductProps) => {
//   const [newProduct, setNewProduct] = useState<ProductModel>(
//     new ProductModel(),
//   );
//   return (
//     <>
//       <header>
//         <h1>New Product</h1>
//       </header>
//       <div className="d-flex justify-content-center align-items-center m-2">
//         <form
//           onSubmit={e => {
//             e.preventDefault(); // stops the page from refereshing
//             props.AddANewProduct(newProduct);
//           }}
//         >
//           <div className="row my-1">
//             <div className="col-md-4">
//               <label htmlFor="txtProductId">Id : </label>
//             </div>
//             <div className="col-md-4">
//               <input
//                 type="number"
//                 id="txtProductId"
//                 onInput={(e: any) =>
//                   setNewProduct({
//                     ...newProduct,
//                     id: +e.target.value,
//                   })
//                 }
//               />
//             </div>
//           </div>
//           <div className="row my-1">
//             <div className="col-md-4">
//               <label htmlFor="txtProductTitle">Title : </label>
//             </div>
//             <div className="col-md-4">
//               <input
//                 type="text"
//                 id="txtProductTitle"
//                 onInput={(e: any) =>
//                   setNewProduct({
//                     ...newProduct,
//                     title: e.target.value,
//                   })
//                 }
//               />
//             </div>
//           </div>
//           <div className="row my-1">
//             <div className="col-md-4">
//               <label htmlFor="txtProductPrice">Price : </label>
//             </div>
//             <div className="col-md-4">
//               <input
//                 type="number"
//                 id="txtProductPrice"
//                 onInput={(e: any) =>
//                   setNewProduct({
//                     ...newProduct,
//                     price: +e.target.value,
//                   })
//                 }
//               />
//             </div>
//           </div>
//           <div className="row my-1">
//             <div className="col-md-4">
//               <label htmlFor="txtProductLikes">Likes : </label>
//             </div>
//             <div className="col-md-4">
//               <input
//                 type="number"
//                 id="txtProductLikes"
//                 onInput={(e: any) =>
//                   setNewProduct({
//                     ...newProduct,
//                     likes: +e.target.value,
//                   })
//                 }
//               />
//             </div>
//           </div>
//           <div className="row my-1">
//             <div className="col-md-4">
//               <label htmlFor="txtProductRating">Rating : </label>
//             </div>
//             <div className="col-md-4">
//               <input
//                 type="number"
//                 id="txtProductRating"
//                 onInput={(e: any) =>
//                   setNewProduct({
//                     ...newProduct,
//                     rating: +e.target.value,
//                   })
//                 }
//               />
//             </div>
//           </div>
//           <div className="row my-1">
//             <div className="col-md-4">
//               <label htmlFor="txtProductImage">Imageurl : </label>
//             </div>
//             <div className="col-md-4">
//               <input
//                 type="text"
//                 id="txtProductImage"
//                 onInput={(e: any) =>
//                   setNewProduct({
//                     ...newProduct,
//                     imageUrl: e.target.value,
//                   })
//                 }
//               />
//             </div>
//           </div>
//           <div className="row my-1">
//             <div className="col-md-4">
//               <label htmlFor="txtProductDescription">Description : </label>
//             </div>
//             <div className="col-md-4">
//               <textarea
//                 id="txtProductDescription"
//                 cols={25}
//                 rows={5}
//                 onInput={(e: any) =>
//                   setNewProduct({
//                     ...newProduct,
//                     description: e.target.value,
//                   })
//                 }
//               ></textarea>
//             </div>
//           </div>
//           <div className="row my-1">
//             <div className="col-md-4"></div>
//             <div className="col-md-6">
//               <button className="btn btn-success">Add Product</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default NewProduct;
