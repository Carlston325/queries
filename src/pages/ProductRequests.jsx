import Hero from "../components/Hero";
import BTN from "../components/BTN";

function ProductRequests() {
  return (
    <>
      <Hero
        title={<h1>Product Queries</h1>}
        lineOne={<p>make your Queries here</p>}
      />
      <form action="/productSubmit" method="post">
        {/* name input */}
        <label htmlFor="name">Enter name:</label>
        <input type="text" name="name" id="namePrdctRqst" />
        {/* enter email */}
        <label htmlFor="email">Enter email:</label>
        <input type="email" name="email" id="emailPrdctRqst" />
        {/* product name */}
        <label htmlFor="productName">What is the Name of the Product</label>
        <input type="text" name="productName" />
        {/* description */}
        <label htmlFor="description">
          Describe the product, tell us what you want?
        </label>
        <textarea name="description" id="descriptionPrdctRqst"></textarea>
        <BTN type="submit">Send request</BTN>
      </form>
    </>
  );
}

export default ProductRequests;
