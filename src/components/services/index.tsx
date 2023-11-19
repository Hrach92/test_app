import React, { Fragment, memo } from "react";
import Header from "../header";
import { Box, Typography } from "@mui/material";
import { services } from "../dependencies/instance";
import Item from "./item";
import sxStyle from "./sxStyle.sx";

function Services() {
  return (
    <>
      <Typography sx={sxStyle.mainTitle}>Browse expert by category</Typography>
      <Box sx={sxStyle.container}>
        {services.map(({ path, title, text, alt }, i) => {
          return (
            <Fragment key={i}>
              <Item path={path} title={title} text={text} alt={alt} />
            </Fragment>
          );
        })}
      </Box>
    </>
  );
}
export default memo(Services);
