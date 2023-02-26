import React from "react";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const MyCardsPage = () => {
  const { user } = useUser();
  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.CARDS} />;

  return <div>MyCardsPage</div>;
};

export default MyCardsPage;
