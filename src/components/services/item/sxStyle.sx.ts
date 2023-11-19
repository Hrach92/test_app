import { kanit, montserrat } from "@/pages/_app";

const sxStyle = {
  container: {
    width: "387px",
    display: "flex",
    flexDirection: "column",
    padding: "18.5px 0 0 36px",
    background: "#232323",
    boxSizing: "border-box",
  },
  title: {
    color: "#fff",
    fontFamily: kanit.style.fontFamily,
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    marginTop: "35px",
  },
  text: {
    color: "#fff",
    fontFamily: montserrat.style.fontFamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    margin: "8px",
  },
  more: {
    color: "#fff",
    fontFamily: kanit.style.fontFamily,
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    margin: "80px 0 10.5px 0",
  },
};
export default sxStyle;
