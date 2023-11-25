import { Widget } from "discord.js";
import "../styles/main.css";

function PageHome() {
  return (
    <div className="container">
      <div className="row centerAlign">
        <div className="column" style={{marginRight: "10vw"}}>
            <h1 className="resetMargin">Hey there!</h1>
            <h4 className="resetMargin">welcum to my page :333</h4>
        </div>
        <img src={require("../assets/wave.png")} className="zoomOnHover" style={{width: "35%", height: "35%"}}/>
      </div>
    </div>
  );
}

export default PageHome;
