import Hero from "../components/Hero";
import BTN from "../components/BTN";
import LinkBox from "../components/LinkBox";

function ProductRequests() {
  return (
    <>
      <Hero
        title={<h1>Product Queries</h1>}
        lineOne={<p>make your Queries here</p>}
      />
      <div className="formDiv">
        <form action="/productSubmit" method="post">
          {/* name input */}

          <div>
            <label htmlFor="name">Enter name:</label>
            <input type="text" name="name" id="namePrdctRqst" />
          </div>

          {/* enter email */}
          <div>
            <label htmlFor="email">Enter email:</label>
            <input type="email" name="email" id="emailPrdctRqst" />
          </div>

          {/* product name */}
          <div>
            <label htmlFor="productName">
              What is the Name of the <span>product</span>?
            </label>
            <input type="text" name="productName" />
          </div>

          {/* description */}
          <div>
            <label htmlFor="description">
              Describe the product, tell us what you want?
            </label>
            <textarea
              name="description"
              id="descriptionPrdctRqst"
              contentEditable
              spellCheck
            ></textarea>
          </div>

          {/* Submit */}
          <div>
            <BTN type="submit">Send request</BTN>
          </div>
        </form>
      </div>
      <div className="links">
        <LinkBox link="/infoRequest" linkName="Go to Info Request" />
        <LinkBox link="/" linkName="Go Home" />
      </div>
    </>
  );
}

export default ProductRequests;
