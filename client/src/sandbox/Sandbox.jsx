import React from "react";
import PropsExe from "./props/PropsExe";
import FatherPropsWithObj from "./props/props-with-object/FatherPropsWithObj";
import Loops from "./Loops";
import OnClick from "./events/OnClick";
import RasingEventFather from "./events/reising-event/RasingEventFather";
import UseState from "./hooks/useState/UseState";
import UseStateWithObject from "./hooks/useState/UseStateWithObject";

const Sandbox = () => {
  return (
    <div>
      {/* <Babel /> */}
      {/* <StringInterpolation /> */}
      {/* <Styles /> */}
      {/* <Styles sx={{ color: "gray", backgroundColor: "black" }} /> */}
      {/* <SxProp />/ */}
      {/* <PropsExe /> */}
      {/* <FatherPropsWithObj /> */}
      {/* <Loops /> */}
      {/* <OnClick /> */}
      {/* <RasingEventFather />/ */}
      {/* <UseState /> */}
      <UseStateWithObject />
    </div>
  );
};

export default Sandbox;
