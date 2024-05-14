import Switch from "@mui/material/Switch";
import { useState } from "react";

import Hero from "../components/Hero";
import Body from "../components/Body";
import ProductRequests from "../components/ProductRequests";
import InfoRequests from "../components/InfoRequests";

function Home() {
  const styleBTN = {
    color: "rgb(39, 158, 255)",
    transform: "translateX(30px)",
    top: "2px",
  };

  const [clicked, setClicked] = useState(false);
  function handleChange() {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
    <>
      <Hero
        title={
          <img
            className="logo"
            src="./images/queries LOGO.png"
            alt="Site Logo"
          />
        }
        lineOne={
          <>
            <p>ask</p>
            <p>
              about <span>anything</span>, from <span>anywhere</span>
            </p>
            <p>and</p>
            <p>
              <span> discover</span> endless possibilities
            </p>
          </>
        }
        lineTwo={
          <p className="smallText">
            made by anyqueries.com. Check the terms and conditions for any user
            related data and contact us through the Contact us page
          </p>
        }
      />
      <Body
        // iINFO BOX 1
        infoBox1={true} //set to "true" if entering values below
        informativeOne="do you want to buy something, but there are too many options. don't worry, just make product request and answer a few questions"
        informativeTwo="is there something you don't understand, don't worry just make an info request, we'll research and answer back with the best explanation."
      />
      <div>
        <div className="slctFrm">
          <p>Product Form</p>
          {clicked ? (
            <Switch
              style={styleBTN}
              checked={clicked}
              onChange={handleChange}
            />
          ) : (
            <Switch checked={clicked} onChange={handleChange} />
          )}
          {/* <p>{clicked ? "true" : "false"}</p> */}
          <p>Info Form</p>
        </div>
      </div>
      {clicked ? <InfoRequests /> : <ProductRequests />}
    </>
  );
}

export default Home;
