import { kanit } from "@/pages/_app";

const sxStyle = {
  header: {
    height: "80px",
    padding: "0 111px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    background: "#232323",
    color: "#fff",
    alignItems: "center",
  },
  right: {
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
};
export default sxStyle;
