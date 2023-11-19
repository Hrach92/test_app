import { Box, Button, Typography } from "@mui/material";
import { memo } from "react";
import sxStyle from "./sxStyle.sx";

function Left() {
  return (
    <Box sx={sxStyle.container}>
      <Typography sx={sxStyle.item1}>Make bright ideas happen</Typography>
      <Typography sx={sxStyle.item2}>
        Brief description of the platform
      </Typography>
      <Box sx={sxStyle.buttons}>
        <Button sx={[sxStyle.button, sxStyle.background1]}>
          Browse Experts
        </Button>
        <Button sx={[sxStyle.button, sxStyle.background2]}>
          Register as Expert
        </Button>
      </Box>
    </Box>
  );
}
export default memo(Left);
