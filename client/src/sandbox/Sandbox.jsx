import React from "react";
import PropsExe from "./props/PropsExe";
import FatherPropsWithObj from "./props/props-with-object/FatherPropsWithObj";
import Loops from "./Loops";
import OnClick from "./events/OnClick";
import RasingEventFather from "./events/reising-event/RasingEventFather";
import UseState from "./hooks/useState/UseState";
import UseStateWithObject from "./hooks/useState/UseStateWithObject";
import InitialCycle from "./life-cycle-hooks/InitialCycle";
import UseStateCycle from "./life-cycle-hooks/UseStateCycle";
import UseEffectAsComponentDidMount from "./life-cycle-hooks/UseEffectAsComponentDidMount";
import UseEffectAsComponentDidUpdate from "./life-cycle-hooks/UseEffectAsComponentDidUpdate";
import UseEffectAsComponentWillUnmount from "./life-cycle-hooks/UseEffectAsComponentWillUnmount";
import UseEffectNoDependencies from "./life-cycle-hooks/UseEffectNoDependencies";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../routes/components/NavItem";
import { Outlet } from "react-router-dom";

const Sandbox = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="components" to="sandbox-components" color="black" />
          <NavItem label="lifecycle hooks" to="lifecycle" color="black" />
          <NavItem label="custom hooks" to="custom-hooks" color="black" />
          <NavItem label="memoization" to="memoization" color="black" />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>

    // <div>
    //   {/* <Styles /> */}
    //   {/* <Styles sx={{ color: "gray", backgroundColor: "black" }} /> */}
    //   {/* <SxProp />/ */}
    //   {/* <PropsExe /> */}
    //   {/* <FatherPropsWithObj /> */}
    //   {/* <Loops /> */}
    //   {/* <OnClick /> */}
    //   {/* <RasingEventFather />/ */}
    //   {/* <UseState /> */}
    //   {/* <UseStateWithObject /> */}
    //   <InitialCycle />
    //   {/* <UseStateCycle /> */}
    //   {/* <UseEffectAsComponentDidMount /> */}
    //   {/* <UseEffectAsComponentDidUpdate /> */}
    //   {/* <UseEffectAsComponentWillUnmount /> */}
    //   {/* <UseEffectNoDependencies /> */}
    // </div>
  );
};

export default Sandbox;
