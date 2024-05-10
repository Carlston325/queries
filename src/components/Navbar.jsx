import BTN from "./BTN";
import InfoIcon from "@mui/icons-material/Info";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";

function Navbar() {
  return (
    <>
      <header>
        <h2 className="subHeading">queries</h2>
        <a href="/">
          <BTN>
            <HomeIcon /> Home
          </BTN>
        </a>
        <a href="/about">
          <BTN>
            <InfoIcon /> About us
          </BTN>
        </a>
        <a href="/contact">
          <BTN>
            <AlternateEmailIcon /> Contact us
          </BTN>
        </a>
      </header>
    </>
  );
}

export default Navbar;
