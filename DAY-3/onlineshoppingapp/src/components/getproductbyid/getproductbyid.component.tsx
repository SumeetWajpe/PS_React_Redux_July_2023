let GetProductById: React.FC = () => {
  return (
    <>
      <label htmlFor="txtProductId">Product Id : </label>
      <input
        type="text"
        id="txtProductId"
        onInput={(e: any) => console.log(e.target.value)}
      />
    </>
  );
};

export default GetProductById;
// 1st -> fetch the id from textbox
// 2nd -> make a fetch api with the id fetched from textbox
// 3rd -> render the title of the product (response)
