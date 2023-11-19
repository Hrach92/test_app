import { Box, Typography } from "@mui/material";
import { memo } from "react";
import sxStyle from "./sxStyle.sx";

function Header() {
  return (
    <Box sx={sxStyle.header}>
      <Typography sx={sxStyle.item}>Experts.ai</Typography>
      <Box sx={sxStyle.right}>
        <Typography sx={[sxStyle.item, sxStyle.first]}>How it works</Typography>
        <Typography sx={[sxStyle.item, sxStyle.second]}>Abous us</Typography>
        <Typography sx={sxStyle.item}>Services</Typography>
      </Box>
    </Box>
  );
}
export default memo(Header);
