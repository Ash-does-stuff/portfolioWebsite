import { React, useEffect, useState } from "react";
import CardContainer from "./MusicStats/CardContainer";

const { topData } = require("../scripts/spotifyData");

function MusicStats() {
  let [elements, setElements] = useState([<h3>give it a sec :3</h3>]);

  useEffect(() => {
    const getData = async () => {
      console.log("hao")
      const data = await topData();
        console.log(data);
        
        setElements([
          <CardContainer key={1} type={"Songs"} data={data.songs.slice(0,10)} />,
          <CardContainer key={2} type={"Artists"} data={data.artists.slice(0,5)} />,
          <CardContainer key={3} type={"Albums"} data={data.albums.slice(0,5)} />,
        ]);
        return
    }

    getData()
    //window.addEventListener("load",(() => {getData();console.log("penis")})());
  }, []);

  return (
    <div
      className="column centerAlign"
      style={{ padding: "2vw", width: "95vw"}}
    >
      <h1>Music data</h1>
      <div className="row">
        {elements}
      </div>
    </div>
  );
}

export default MusicStats;
