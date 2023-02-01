import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import NavItem from "../../routes/components/NavItem";

const LifeCycleHooks = () => {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="Initial" to="initial" color="black" />
          <NavItem label="useState" to="use-state-cycle" color="black" />
          <NavItem
            label="useEffect did mount"
            to="componentDidMount"
            color="black"
          />
          <NavItem
            label="useEffect did update"
            to="componentDidUpdate"
            color="black"
          />
          <NavItem
            label="useEffect will unmount"
            to="componentWillUnmount"
            color="black"
          />
          <NavItem
            label="useEffect no dependencies"
            to="no-dependencies"
            color="black"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default LifeCycleHooks;
