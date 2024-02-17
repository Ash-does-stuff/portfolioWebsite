import { useState } from "react";
import "../../styles/main.css";

function MusicDataCard(props) {
  const style = { "--n": props.id };

  const id = "musicCard-" + props.type + "-" + props.id;

  const [content] = useState([
    <div className="songCard" style={style} id={id}>
      <div className="bg">

      </div>
      <div className="row content"style={{position: "absolute"}}>
        <img src={props.img} alt="cover"></img>
        <h3>
          <strong>{props.id + "."}</strong>
        </h3>
        {props.type==="Artists" ? <h3 style={{ marginLeft: "0.5vw" }}>{props.title}</h3>:<div className="column">
        <h3 style={{ marginLeft: "0.5vw" }}>{props.title}<br></br><i><small>{props.artists.map((artist,i) => artist + (i+1<props.artists.length ? ", ":""))}</small></i></h3>
        </div>}
      </div>
    </div>
  ]);

  const css = `
    #${id}:hover .bg {
      background-image:url(${props.img});
    } `;

  let styleElement = document.createElement("style");
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    styleElement.appendChild(document.createTextNode(css));
  }
  document.getElementsByTagName("head")[0].appendChild(styleElement);

  return <>{content}</>;
}

export default MusicDataCard;
