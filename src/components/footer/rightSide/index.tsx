import { Box, Typography } from "@mui/material";
import { memo } from "react";
import sxStyle from "./sxStyle.sx";

function Footer() {
  return (
    <Box sx={sxStyle.container}>
      <Box sx={sxStyle.right}>
        <Typography sx={[sxStyle.item, sxStyle.first]}>Pricing</Typography>
        <Typography sx={[sxStyle.item, sxStyle.second]}>Blog</Typography>
        <Typography sx={sxStyle.item}>Help</Typography>
      </Box>
      <Typography sx={sxStyle.subItem}>
        Terms of Use & Privacy Policy
      </Typography>
    </Box>
  );
}
export default memo(Footer);
