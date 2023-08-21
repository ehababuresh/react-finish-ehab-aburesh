// import React, { useCallback } from "react";
// import { useUser } from "../../users/providers/UserProvider";
// import { Navigate } from "react-router-dom";
// import ROUTES from "../../routes/routesModel";
// import useCards from "./../hooks/useCards"
// import Container from "mui/material/Continuer"
// import pageHeader from "../../components/PageHeader"
// import { useEffect } from "react";
// import CArdsFeedback from "../components/CardsFeedback"

// const FavCardsPage = () => {
//   const {value , ...rest} = useCards ();
//   const {isLoading,error,cards} = value ;
//   const {handleGetFavCards , handleDeleteCard} = rest ; 
  


//   useEffect(() => {
//     handleGetFavCards();
//   }, []);



// const onDeleteCard = useCallback ( 
//   async (cardId) => { 
//     await handleDeleteCard (cardId) ; 
//     await handleGetFavCards () ; 
//   } , 
//   [handleDeleteCard]
// ) ; 

// const changeLikeStatus = useCallback (async () => {
//   await handleGetFavCards (); 
// },[]) ; 

//   return (

//     <Container >
//       <pageHeader 
//       title = "Favorite cards page "
//       subtitle = "here you can find all fav business cards "
//       />

//       <CArdsFeedback
//       isLoading = {isLoading}
//       error = {error}
//       cards = {cards}
//       onDelete = {onDeleteCard}
//       onLike = {changeLikeStatus}
//       />
//     </Container>
//   )


// };

// export default FavCardsPage;
