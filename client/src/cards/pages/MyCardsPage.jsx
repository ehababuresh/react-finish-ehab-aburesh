import React, { useEffect } from "react";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import PageHeader from "../../components/PageHeader";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";

const MyCardsPage = () => {
  const { user } = useUser();
  const { value, handleGetMyCards , handleDeleteCard } = useCards();
  const { isLoading, error, cards,filteredCards } = value;
  const navigate = useNavigate();

  useEffect(() => {
    handleGetMyCards();
  }, []);

  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.CARDS} />;

  const onDeleteCard = async cardId => {
    await handleDeleteCard(cardId);
    await handleGetMyCards ();
  }

  return (
    <Container sx={{ position: "relative", minHeight: "92vh" }}>
      <PageHeader
        title="My Cards Page"
        subtitle="Here you can find your business cards"
      /> {""}

      {cards && (
        <Fab
          onClick={() => navigate(ROUTES.CREATE_CARD)}
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            bottom: 75,
            right: 16,
          }}>
          <AddIcon/>
        </Fab>
      )}
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={filteredCards}
        onDelete={onDeleteCard}
      />
    </Container>
  );
};

export default MyCardsPage;
