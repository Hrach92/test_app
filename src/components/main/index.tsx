import React, { memo } from "react";
import Services from "../services";
import Ideas from "../ideaContainer";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import Works from "../works";
import LogoContainer from "../logoContainer";

function Main() {
  return (
    <Box sx={sxStyle.container}>
      <Ideas />
      <Works />
      <LogoContainer />
      <Services />
    </Box>
  );
}
export default memo(Main);
