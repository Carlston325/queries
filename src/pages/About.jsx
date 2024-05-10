import Hero from "../components/Hero";
import Body from "../components/Body";

function About() {
  return (
    <>
      <Hero title={<h1>About us</h1>} />
      <Body
        // LINK BOX 1
        linkBox1={false} //set to "true" if entering values below
        linkOne=""
        linkNameOne=""
        linkTwo=""
        linkNameTwo=""
        // iINFO BOX 2
        infoBox2={true} //set to "true" if entering values below
        infoBoxHeading="I Am:"
        infoDescrip="I am Carlston Rebelo, I am self-learning web development"
      />
      <Body
        infoBox2={true} //set to "true" if entering values below
        infoBoxHeading="My Goal:"
        infoDescrip="My goal is to have a professional carreer in web developer"
      />
    </>
  );
}

export default About;
