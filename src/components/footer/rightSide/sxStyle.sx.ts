import { kanit, montserrat } from "@/pages/_app";

const sxStyle = {
  container: {
    display: "flex",
    flexDirection: "column",
    background: "#232323",
    marginTop: "149px",
    alignItems: "center",
    gap: "29px",
  },
  right: {
    display: "flex",
    flexDirection: "row",
  },
  item: {
    color: "#fff",
    fontFamily: kanit.style.fontFamily,
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  },
  subItem: {
    color: "#fff",
    fontFamily: montserrat.style.fontFamily,
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  first: {
    marginRight: "110px",
  },
  second: {
    marginRight: "62px",
  },
};
export default sxStyle;
