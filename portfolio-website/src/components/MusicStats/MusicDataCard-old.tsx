import { useState } from "react";
import "../../styles/main.css";

interface Props {
  id: number;
  title: string;
  img: string;
  type: string;
}

function MusicDataCard(props: Props) {

    const style = { "--n": props.id, "--img": new URL(props.img)} as React.CSSProperties;

    const id = "musicCard-"+props.type+"-"+props.id

  const [content,setContent] = useState([<div
    className="row preset-songCard"
    style={style}
    id={id}
  >
    <img src={props.img} alt="cover"></img>
    <h3>
      <strong>{props.id + "."}</strong>
    </h3>
    <h3 style={{ marginLeft: "0.5vw" }}>{props.title}</h3>
  </div>])

  return (
    <>
    {content}
    </>
  );
}

export default MusicDataCard;
