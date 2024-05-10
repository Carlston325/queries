import Hero from "../components/Hero";
import Body from "../components/Body";

function Contact() {
  return (
    <>
      <Hero title={<h1>Contact us</h1>} />
      <Body
        // iINFO BOX 1
        infoBox1={false} //set to "true" if entering values below
        informativeOne=""
        informativeTwo=""
        // LINK BOX 1
        linkBox1={false} //set to "true" if entering values below
        linkOne=""
        linkNameOne=""
        linkTwo=""
        linkNameTwo=""
        // iINFO BOX 2
        infoBox2={true} //set to "true" if entering values below
        infoBoxHeading="Email"
        infoDescrip="Send us a mail using the link below"
        infoLink="mailto:notslrac@gmail.com"
        infoLinkTitle="Click here"
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

export default Contact;
