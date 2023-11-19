import { Box, Divider, Typography } from "@mui/material";
import { memo } from "react";
import sxStyle from "./sxStyle.sx";
import Icons from "./icons";
import RightSide from "./rightSide";

function Footer() {
  return (
    <Box sx={sxStyle.container}>
      <Box sx={sxStyle.footer}>
        <Icons />
        <RightSide />
      </Box>
      <Box sx={sxStyle.divider}>© 2022 Experts | All rights reserved.</Box>
    </Box>
  );
}
export default memo(Footer);
