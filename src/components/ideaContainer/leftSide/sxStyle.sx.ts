import { kanit } from "@/pages/_app";

const sxStyle = {
  container: {
    display: "flex",
    flexDirection: "column",
    color: "#fff",
  },
  item1: {
    color: "var(--white)",
    fontFamily: kanit.style.fontFamily,
    fontSize: "76px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "70px",
    maxWidth: "475px",
  },
  item2: {
    color: "var(--white)",
    fontFamily: kanit.style.fontFamily,
    fontSize: "45px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "48px",
    maxWidth: "350px",
    marginTop: "25px",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    marginTop: "44px",
  },
  button: {
    color: "var(--white)",
    fontFamily: kanit.style.fontFamily,
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  background1: {
    background: "#7041EA",
    "&:hover": {
      background: "#7041EA",
    },
  },
  background2: {
    border: "1px solid #FFF",
  },
};
export default sxStyle;
