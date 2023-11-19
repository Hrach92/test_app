import React, { Fragment, memo } from "react";
import Header from "../header";
import { Box, Typography } from "@mui/material";
import { services } from "../dependencies/instance";
import sxStyle from "./sxStyle.sx";

function LogoContainer() {
  return (
    <>
      <Box sx={sxStyle.container}>
        <Box sx={sxStyle.logo}></Box>
        <Box sx={sxStyle.textes}>
          <Typography sx={sxStyle.title}>The brains behind this</Typography>
          <Typography sx={sxStyle.subText}>
            Our mission at Experts.ai is to bridge the gap between visionary
            businesses and exceptional AI talent. We believe that AI has the
            potential to revolutionize industries and create unprecedented
            value, but only when placed in the hands of those who truly
            understand its complexities and capabilities. We strive to
            facilitate collaborations that yield not only groundbreaking
            technological advancements but also foster learning and growth for
            both our clients and experts.
          </Typography>
          <Typography sx={[sxStyle.subText, { marginTop: "10px" }]}>
            Our mission at Experts.ai is to bridge the gap between visionary
            businesses and exceptional AI talent. We believe that AI has the
            potential to revolutionize industries and create unprecedented
            value, but only when placed in the hands of those who truly
            understand its complexities and capabilities. We strive to
            facilitate collaborations that yield not only groundbreaking
            technological advancements but also foster learning and growth for
            both our clients and experts.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default memo(LogoContainer);
