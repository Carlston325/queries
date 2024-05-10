import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const BTN = styled(Button)({
  margin: "2px",
  color: "black",
  height: "42px",
  fontSize: "12px",
  fontWeight: 800,
  boxShadow: "1px 1px black",
  "&:hover": {
    color: "#8c00ff",
    textShadow: "2px 0px rgb(148, 145, 0)",
    boxShadow: "none",
    borderColor: "#005cbf",
  },
  "&:active": {
    boxShadow: "none",
    borderColor: "#005cbf",
  },
});

export default BTN;
