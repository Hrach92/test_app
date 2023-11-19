import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import sxStyle from "./sxStyle.sx";

type ItemTypes = {
  title: string;
  text: string;
  path: StaticImageData;
  alt: string;
};

const Item = ({ title, text, path, alt }: ItemTypes) => {
  return (
    <Box sx={sxStyle.container}>
      <Image src={path} alt={alt} width="74" height="74" />
      <Typography sx={sxStyle.title}>{title}</Typography>
      <Typography sx={sxStyle.text}>{text}</Typography>
      <Typography sx={sxStyle.more}>Explore more</Typography>
    </Box>
  );
};
export default memo(Item);
