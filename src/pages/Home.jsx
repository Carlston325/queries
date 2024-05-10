import Hero from "../components/Hero";
import Body from "../components/Body";

function Home() {
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
        // LINK BOX 1
        linkBox1={true} //set to "true" if entering values below
        linkOne="/productRequests"
        linkNameOne="Make a PRODUCT query"
        linkTwo="/infoRequests"
        linkNameTwo="Make a INFO query"
        // iINFO BOX 2
        infoBox2={false} //set to "true" if entering values below
        informativeThree=""
        informativeFour=""
        // LINK BOX 2
        linkBox2={false} //set to "true" if entering values below
        linkThree=""
        linkNameThree=""
        linkFour=""
        linkNameFour=""
      />
    </>
  );
}

export default Home;
