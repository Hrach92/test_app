import { kanit, montserrat } from "@/pages/_app";

const sxStyle = {
  container: {
    width: "387px",
    display: "flex",
    flexDirection: "column",
    background: "#232323",
    boxSizing: "border-box",
  },
  count: {
    display: "flex",
    flexDirection: "row",
    gap: "29px",
    alignItems: "baseLine",
  },
  number: {
    color: "#fff",
    fontFamily: kanit.style.fontFamily,
    fontSize: "110px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "110px",
    opacity: "0.15",
  },
  dot: {
    width: "20px",
    height: "20px",
    borderRadius: "100%",
  },

  title: {
    color: "#fff",
    fontFamily: kanit.style.fontFamily,
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    marginTop: "31px",
  },
  text: {
    color: "#fff",
    fontFamily: montserrat.style.fontFamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    marginTop: "36px",
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
