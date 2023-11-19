import { Box, Typography } from "@mui/material";
import { memo } from "react";
import sxStyle from "./sxStyle.sx";
import Image from "next/image";
import main from "/public/mainImage.png";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";

function Ideas() {
  return (
    <Box sx={sxStyle.container}>
      <LeftSide />
      <RightSide />
    </Box>
  );
}
export default memo(Ideas);
