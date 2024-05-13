import Hero from "../components/Hero";
import BTN from "../components/BTN";
import LinkBox from "../components/LinkBox";
import { useState } from "react";

function ProductRequests() {
  const [prdct, setPrdct] = useState({
    username: "",
    email: "",
    prdctName: "",
    description: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setPrdct((preValue) => {
      return { ...preValue, [name]: value };
    });
  }

  const [submitPrdct, setSubmitPrdct] = useState([]);
  function handleSubmit() {
    setPrdct({ username: "", email: "", prdctName: "", description: "" });
    setSubmitPrdct((preValue) => {
      return [...preValue, prdct];
    });
  }

  return (
    <>
      <Hero
        title={<h1>Product Queries</h1>}
        lineOne={<p>make your Queries here</p>}
      />
      <div className="formDiv">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {/* name input */}
          <div>
            <label htmlFor="name">Enter name:</label>
            <input
              type="text"
              name="username"
              value={prdct.username}
              onChange={handleChange}
              id="namePrdctRqst"
            />
          </div>

          {/* enter email */}
          <div>
            <label htmlFor="email">Enter email:</label>
            <input type="email" name="email" id="emailPrdctRqst" />
          </div>

          {/* product name */}
          <div>
            <label htmlFor="prdctName">
              What is the Name of the <span>product</span>?
            </label>
            <input
              type="text"
              name="prdctName"
              value={prdct.prdctName}
              onChange={handleChange}
              id="prdctTypeRqst"
            />
          </div>

          {/* description */}
          <div>
            <label htmlFor="description">
              Describe the product, tell us what you want?
            </label>
            <textarea
              name="description"
              value={prdct.description}
              onChange={handleChange}
              id="prdctDescriptionRqst"
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
