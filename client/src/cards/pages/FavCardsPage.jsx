
import { useCallback } from "react";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import PageHeader from "../../components/PageHeader";
import Container from "@mui/material/Container";
import  { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";


const FavCardsPage = () => {
  const { user } = useUser();
  const { value,...rest } = useCards();
  const { isLoading, error, cards,filteredCards } = value;
  const {handleDeleteCard, handleGetFavCards} = rest ; 

  useEffect(() => {
    handleGetFavCards();
  }, []);


  const onDeleteCard = useCallback ( 
    async (cardId) => { 
      await handleDeleteCard(cardId) ; 
      await handleGetFavCards(); 
    }, 
    [handleDeleteCard]
    ); 
  
  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards(); 
  }, []) ; 
  


  
  if (!user) return <Navigate replace to={ROUTES.CARDS} />;



  return (
    <Container>
      <PageHeader
        title="fav Cards Page"
        subtitle="Here you can find your favorites card"
      /> 

      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={filteredCards}
        onDelete={onDeleteCard}
        onLike={changeLikeStatus}
      />
    </Container>
  );
};
export default FavCardsPage;
