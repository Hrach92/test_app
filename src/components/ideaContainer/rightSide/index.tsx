import { Box, Button, Typography } from "@mui/material";
import { memo } from "react";
import main from "/public/mainImage.png";
import sxStyle from "./sxStyle.sx";
import Image from "next/image";
import LeftIcon from "../../../../public/left";
import RightIcon from "../../../../public/right";

function Right() {
  return (
    <Box sx={sxStyle.container}>
      <Box sx={sxStyle.img}>
        <LeftIcon />
        <Image src={main} alt="main image" width="275" height="275" />
        <RightIcon />
      </Box>
      <Typography sx={sxStyle.name}>Jane Doe</Typography>
      <Typography sx={sxStyle.posititon}>Javascript developer</Typography>
    </Box>
  );
}
export default memo(Right);
