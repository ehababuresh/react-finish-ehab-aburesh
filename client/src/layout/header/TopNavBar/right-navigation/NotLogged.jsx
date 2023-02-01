import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";

const NotLogged = () => {
  return (
    <Box>
      <NavItem label="signup" to={ROUTES.SIGNUP} />

      <Button color="inherit">
        <Typography>Login</Typography>
      </Button>
    </Box>
  );
};

export default NotLogged;
