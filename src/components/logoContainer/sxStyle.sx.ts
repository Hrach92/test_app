import { kanit, montserrat } from "@/pages/_app";

const sxStyle = {
  container: {
    display: "flex",
    felxDirection: "row",
    paddingRight: "52px",
    gap: "58px",
    marginTop: "121px",
  },
  logo: {
    width: "100%",
    maxWidth: "500px",
  },
  textes: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: "#fff",
    fontFamily: kanit.style.fontFamily,
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "90px",
  },
  subText: {
    color: "#fff",
    fontFamily: montserrat.style.fontFamily,
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
};
export default sxStyle;
