import React from "react";
import { func } from "prop-types";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import cardType from "./../../models/types/cardType";

const Card = ({ card, onDelete, onLike }) => {
  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardActionArea>
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>

      <CardActionBar cardId={card._id} onDelete={onDelete} onLike={onLike} />
    </MuiCard>
  );
};

Card.propTypes = {
  card: cardType.isRequired,
  onDelete: func.isRequired,
  onLike: func.isRequired,
};

export default Card;
