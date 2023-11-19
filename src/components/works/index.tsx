import React, { Fragment, memo } from "react";
import { Box, Typography } from "@mui/material";
import { works } from "../dependencies/instance";
import Item from "./item";
import sxStyle from "./sxStyle.sx";

function Works() {
  return (
    <>
      <Typography sx={sxStyle.mainTitle}>How it Works</Typography>
      <Box sx={sxStyle.container}>
        {works.map(({ number, title, text, color }) => {
          return (
            <Fragment key={number}>
              <Item title={title} text={text} number={number} color={color} />
            </Fragment>
          );
        })}
      </Box>
    </>
  );
}
export default memo(Works);
