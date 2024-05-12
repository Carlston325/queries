import Hero from "../components/Hero";
import BTN from "../components/BTN";
import LinkBox from "../components/LinkBox";

function InfoRequests() {
  return (
    <>
      <Hero
        title={<h1>Info Queries</h1>}
        lineOne={<p>make your Queries here</p>}
      />
      <div className="formDiv">
        <form action="/infoSubmit" method="post">
          {/* name input */}
          <div>
            <label htmlFor="name">Enter name:</label>
            <input type="text" name="name" id="nameInfoRqst" />
          </div>
          {/* enter email */}
          <div>
            <label htmlFor="email">Enter email:</label>
            <input type="email" name="email" id="emailInfoRqst" />
          </div>
          {/* product name */}
          <div>
            <label htmlFor="productName">
              What <span>info</span> do you want to know about?
            </label>
            <input type="text" name="productName" />
          </div>
          {/* description */}
          <div>
            <label htmlFor="description">Anything else about the info?</label>
            <textarea name="description" id="descriptionInfoRqst"></textarea>
          </div>
          {/* Submit */}
          <div>
            <BTN type="submit">Send request</BTN>
          </div>
        </form>
      </div>
      <div className="links">
        <LinkBox link="/prdctRequest" linkName="Go to Product Request" />
        <LinkBox link="/" linkName="Go Home" />
      </div>
    </>
  );
}

export default InfoRequests;
