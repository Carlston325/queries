import BTN from "./BTN";
import { useState } from "react";

function InfoRequests() {
  const [info, setInfo] = useState({
    username: "",
    email: "",
    infoName: "",
    description: "",
    formType: "Info Request",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((preValue) => {
      return { ...preValue, [name]: value };
    });
  }

  const [submitInfo, setSubmitInfo] = useState([]);
  function handleSubmit() {
    setInfo({ username: "", email: "", infoName: "", description: "" });
    setSubmitInfo((preValue) => {
      return [...preValue, info];
    });
  }

  return (
    <div className="frm">
      <h2>Info Queries</h2>
      <p>make your Queries here</p>
      <div className="formDiv">
        {/* <div>{info.name}</div> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {/* name input */}
          <div>
            <label htmlFor="username">Enter name</label>
            <input
              type="text"
              name="username"
              value={info.username}
              onChange={handleChange}
              id="nameInfoRqst"
            />
          </div>

          {/* enter email */}
          <div>
            <label htmlFor="email">Enter email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={info.email}
              id="emailInfoRqst"
            />
          </div>

          {/* info name */}
          <div>
            <label htmlFor="infoName">
              What <span>info</span> do you want to know about?
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="infoName"
              value={info.infoName}
              id="infoTypeRqst"
            />
          </div>

          {/* description */}
          <div>
            <label htmlFor="description">Anything else about the info?</label>
            <textarea
              onChange={handleChange}
              name="description"
              value={info.description}
              id="infoDescriptionRqst"
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

export default InfoRequests;
