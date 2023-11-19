import { kanit } from "@/pages/_app";

const sxStyle = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "373px",
    padding: "0 98px 0 111px",
    background: "#232323",
    color: "var(--white)",
  },

  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    display: "flex",
    flexDirection: "row",
  },
  item: {
    color: "var(--white)",
    fontFamily: kanit.style.fontFamily,
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  },
  first: {
    marginRight: "119px",
  },
  second: {
    marginRight: "67px",
  },
  divider: {
    width: "100%",
    borderTop: "1px solid #FFFFFF",
    marginTop: "65px",
    textAlign: "center",
    paddingTop: "36px",
  },
};
export default sxStyle;
