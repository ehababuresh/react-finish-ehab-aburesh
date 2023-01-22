import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";

const CardsPage = () => {
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
      createdAt: new Date().toLocaleTimeString(),
      likes: [],
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
      createdAt: new Date().toLocaleTimeString(),
      likes: ["63765801e20ed868a69a62c4f"],
    },
    {
      _id: "63765801e20ed868a69a62c4f",
      title: "third",
      subtitle: "subtitle",
      description: "testing 123",
      phone: "050-0000000",
      email: "test@gmail.com",
      web: "",
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
      createdAt: new Date().toLocaleTimeString(),
      likes: [],
    },
  ];

  return (
    <Container>
      <PageHeader
        title="Cards Page"
        subtitle="On this page you can find all business cards form all categories"
      />
      <Cards cards={cards} />
    </Container>
  );
};

export default CardsPage;
