import React, { memo } from "react";
import Header from "../header";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import Footer from "../footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={sxStyle.container}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
export default memo(Layout);
