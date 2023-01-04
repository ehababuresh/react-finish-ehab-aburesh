import "./App.css";
import Card from "./cards/components/card/Card";
import Babel from "./sandbox/components/Babel";
import StringInterpolation from "./sandbox/components/StringInterpolation";
import Styles from "./sandbox/components/Styles";
import SxProp from "./sandbox/mui-sandbox/SxProp";

function App() {
  return (
    <div>
      {/* <Babel /> */}
      {/* <StringInterpolation /> */}
      {/* <Styles /> */}
      {/* <Styles sx={{ color: "gray", backgroundColor: "black" }} /> */}
      {/* <SxProp />/ */}
      <Card />
    </div>
  );
}

export default App;
