import React from "react";
import PropTypes from "prop-types";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

const Card = ({ card }) => {
  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardActionArea>
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>

      <CardActionBar cardId={card._id} />
    </MuiCard>
  );
};

Card.propTypes = {};

export default Card;
