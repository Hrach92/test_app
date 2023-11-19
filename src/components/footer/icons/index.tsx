import { Box, Typography } from "@mui/material";
import { memo } from "react";
import sxStyle from "./sxStyle.sx";
import FacebookIcon from "../../../../public/faceBookIcon";
import InstagramIcon from "../../../../public/instagramIcon";
import LinkedinIcon from "../../../../public/linkedin";

function Icons() {
  return (
    <Box sx={sxStyle.container}>
      <Typography sx={sxStyle.item}>Experts.ai</Typography>
      <Box sx={sxStyle.icons}>
        <FacebookIcon />
        <InstagramIcon />
        <LinkedinIcon />
      </Box>
    </Box>
  );
}
export default memo(Icons);
