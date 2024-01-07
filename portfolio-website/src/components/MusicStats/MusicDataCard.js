import { useState } from "react";
import "../../styles/main.css";

function MusicDataCard(props) {
  const style = { "--n": props.id };

  const id = "musicCard-" + props.type + "-" + props.id;

  //const artists = props.artists.map((artist) => artist + ", ").slice(0,-2)

  const [content, setContent] = useState([
    <div className="row preset-songCard" style={style} id={id}>
      <img src={props.img} alt="cover"></img>
      <h3>
        <strong>{props.id + "."}</strong>
      </h3>
      {props.type=="Artists" ? <h3 style={{ marginLeft: "0.5vw" }}>{props.title}</h3>:<div className="column">
      <h3 style={{ marginLeft: "0.5vw" }}>{props.title}<br></br><i><small>{props.artists.map((artist,i) => artist + (i+1<props.artists.length ? ", ":""))}</small></i></h3>
      </div>}
    </div>,
  ]);

  const css = `#${id} {transition: 1s;} #${id}:hover {background-image:url(${props.img});color: white}`;
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
