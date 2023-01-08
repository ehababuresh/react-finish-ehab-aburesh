import React from "react";
import Card from "./card/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Cards = () => {
  const cards = [
    {
      _id: "63765801e20ed868a69a62c4a",
      title: "first",
      subtitle: "subtitle",
      description: "testing 123",
      phone: "050-0000000",
      email: "test@gmail.com",
      web: "https://www.test.co.il",
      image: {
        url: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
        alt: "Business card image",
      },
      address: {
        state: "",
        country: "country",
        city: "tel aviv",
        street: "shinkin",
        houseNumber: 3,
        zip: 1234,
      },
      bizNumber: 1_000_000,
      user_id: "63765801e20ed868a69a62c2",
    },
    {
      _id: "63765801e20ed868a69a62c4b",
      title: "second",
      subtitle: "subtitle",
      description: "testing 123",
      phone: "050-0000000",
      email: "test@gmail.com",
      web: "https://www.test.co.il",
      image: {
        url: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
        alt: "Business card image",
      },
      address: {
        state: "",
        country: "country",
        city: "tel aviv",
        street: "shinkin",
        houseNumber: 3,
        zip: 1234,
      },
      bizNumber: 1_000_001,
      user_id: "63765801e20ed868a69a62c2",
    },
    {
      _id: "63765801e20ed868a69a62c4f",
      title: "third",
      subtitle: "subtitle",
      description: "testing 123",
      phone: "050-0000000",
      email: "test@gmail.com",
      web: "https://www.test.co.il",
      image: {
        url: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
        alt: "Business card image",
      },
      address: {
        state: "",
        country: "country",
        city: "tel aviv",
        street: "shinkin",
        houseNumber: 3,
        zip: 1234,
      },
      bizNumber: 1_000_002,
      user_id: "63765801e20ed868a69a62c2",
    },
  ];

  // const cards = [];

  if (!cards.length)
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );

  return (
    <Grid container spacing={2} pb={2}>
      {cards.map(card => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <Card card={card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
