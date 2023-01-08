import React from "react";
import CardMedia from "@mui/material/CardMedia";

const CardHead = ({ image }) => {
  return (
    <CardMedia component="img" image={image.url} height="194" alt={image.alt} />
  );
};

export default CardHead;
