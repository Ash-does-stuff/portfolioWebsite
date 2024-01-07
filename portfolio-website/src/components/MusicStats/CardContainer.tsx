import { useEffect, useState } from "react";
import MusicDataCard from "./MusicDataCard";

const { topData } = require("../../scripts/spotifyData");

interface Props {
  data: any;
  type: string;
}

function CardContainer(props: Props) {
  const cards = () => {
    let i = 0;
    return props.data.map((obj: any) => {
      i++;

      let title = obj.score ? obj.album.name:obj.name;
      let img = obj.album ? obj.album.image.url:obj.image.url
      return (
        <MusicDataCard key={i} type={props.type} id={i} title={title} img={img}/>
      )
    });
  };

  return (
    <div className="column cardContainer preset-fadeInBottom">
      <h2>{props.type + ": "}</h2>
      {cards()}
    </div>
  );
}

export default CardContainer;
