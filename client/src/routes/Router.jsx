import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import FavCardsPage from "../cards/pages/FavCardsPage";
import MyCardsPage from "../cards/pages/MyCardsPage";
import CreateCardPage from "../cards/pages/CreateCardPage";
<<<<<<< HEAD
import EditCardPage from "../cards/pages/EditCardpage";
import EditUserpage from "../users/pages/EditUserpage";
import Indexpage from "../cards/pages/Indexpage";

import ContactPage from "../cards/pages/Contactpage";
import ProfilePage from "../users/pages/Profilepage";

import ForgotPasswordPage from "../users/pages/ForgotPasswordPage";
import ResetPasswordPage from "../users/pages/ResetPasswordPage";
import VerificationPage from "../users/pages/VerificationPage";
=======
import PropsExe from "../sandbox/props/PropsExe";
>>>>>>> 943a180e962c4d18572aecaf8191ac40f3b09ef0

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<Indexpage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
  
     <Route path={ROUTES.CONTACT} element={<ContactPage />} />
     <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
    <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
<Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />

<Route path={`${ROUTES.CARD_DETAILS}/:cardId`} element={<CardDetailsPage />} />
<Route path={`${ROUTES.EDIT_CARD}/:cardId`} element={<EditCardPage />} />
  
      <Route path={`${ROUTES.USER_PROFILE}/:userId`} element={<ProfilePage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUserpage/>} />
      
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
<<<<<<< HEAD
      <Route path={ROUTES.FORGET_PASSWORD} element={<ForgotPasswordPage />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={ROUTES.VERY} element={<VerificationPage/>} />

    
=======
      <Route path={ROUTES.SANDBOX} element={<Sandbox />}>
        <Route path="sandbox-components" element={<SandboxComponents />}>
          <Route path="babel" element={<Babel />} />
          <Route
            path="comp-style"
            element={
              <Styles sx={{ backgroundColor: "black", color: "white" }} />
            }
          />
          <Route
            path="string-interpolation"
            element={<StringInterpolation />}
          />
        </Route>
        <Route path="props" element={<PropsExe />} />
        <Route path="lifecycle" element={<LifeCycleHooks />}>
          <Route path="initial" element={<InitialCycle />} />
          <Route path="use-state-cycle" element={<UseStateCycle />} />
          <Route
            path="componentDidMount"
            element={<UseEffectAsComponentDidMount />}
          />
          <Route
            path="componentDidUpdate"
            element={<UseEffectAsComponentDidUpdate />}
          />
          <Route
            path="componentWillUnmount"
            element={<UseEffectAsComponentWillUnmount />}
          />
          <Route path="no-dependencies" element={<UseEffectNoDependencies />} />
        </Route>{" "}
        <Route path="memoization" element={<Memoization />}>
          <Route path="use-callback" element={<UseCallback />} />
          <Route path="use-memo" element={<UseMemo />} />
        </Route>
        <Route path="custom-hooks" element={<CustomHooks />}>
          <Route path="counter" element={<CustomCounterHook />} />
          <Route path="user" element={<CustomName />} />
        </Route>
        <Route path="context" element={<A />} />
        <Route path="forms" element={<FormTest />} />
      </Route>
>>>>>>> 943a180e962c4d18572aecaf8191ac40f3b09ef0
      <Route path="*" element={<ErrorPage />} />
      <Route path={ROUTES.ROOT} element={<Indexpage />} />
    </Routes>
  );
};

export default Router;
