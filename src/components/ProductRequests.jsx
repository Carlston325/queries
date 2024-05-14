import BTN from "./BTN";
import { useState } from "react";

function ProductRequests() {
  const [prdct, setPrdct] = useState({
    username: "",
    email: "",
    prdctName: "",
    description: "",
    formType: "Product Request",
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
    <div className="frm">
      <h2>Product Queries</h2>
      <p>make your Queries here</p>
      <div className="formDiv">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {/* name input */}
          <div>
            <label htmlFor="name">Enter name</label>
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
            <label htmlFor="email">Enter email</label>
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
    </div>
  );
}

export default ProductRequests;
