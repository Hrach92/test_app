import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import sxStyle from "./sxStyle.sx";

type ItemTypes = {
  title: string;
  text: string;
  number: string;
  color: string;
};

const Item = ({ title, text, number, color }: ItemTypes) => {
  return (
    <Box sx={sxStyle.container}>
      <Box sx={sxStyle.count}>
        <Typography sx={sxStyle.number}>{number}</Typography>
        <Box sx={[sxStyle.dot, { background: color }]}></Box>
      </Box>
      <Typography sx={sxStyle.title}>{title}</Typography>
      <Typography sx={sxStyle.text}>{text}</Typography>
    </Box>
  );
};
export default memo(Item);
