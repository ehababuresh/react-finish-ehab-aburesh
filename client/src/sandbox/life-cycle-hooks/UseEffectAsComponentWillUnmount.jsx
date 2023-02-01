import { useEffect } from "react";
import { colorLog } from "./utils";

const UseEffectAsComponentWillUnmount = () => {
  useEffect(() => {
    colorLog("In useEffect", "#2d65ff");
    return () => colorLog("In useEffect return", "lightgreen");
  }, []);

  return (
    <div>
      {" "}
      {colorLog("In render", "red")} <p>useEffect as component will unmount</p>
    </div>
  );
};

export default UseEffectAsComponentWillUnmount;
