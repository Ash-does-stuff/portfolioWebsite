import { React, useEffect, useState } from "react";
import CardContainer from "./MusicStats/CardContainer";

const { topData } = require("../scripts/spotifyData");

function MusicStats() {
  let [elements, setElements] = useState([<div className="centerAlign"><h3>give it a sec :3</h3></div>]);

  useEffect(() => {
    const getData = async () => {
      const data = await topData();
      setElements([
        <div className="row" style={{ width: "100%", margin: "1vw" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContainer
              key={1}
              type={"Songs"}
              data={data.songs.slice(0, 5)}
            />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div className="column preset-fadeInLeft">
              <h1 className="resetMargin" style={{ fontSize: "3vw" }}>
                Top songs
              </h1>
              <h4
                className="resetMargin indentation"
                style={{ fontSize: "2vw" }}
              >
                the stuff I be jammin out to is weird,
                <br />I knoww
              </h4>
            </div>
          </div>
        </div>,
        <div className="row" style={{ width: "100%", margin: "1vw" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div className="column preset-fadeInRight" style={{ textAlign: "right" }}>
              <h1 className="resetMargin" style={{ fontSize: "3vw" }}>
                Top artists
              </h1>
              <h4
                className="resetMargin indentation"
                style={{ fontSize: "2vw" }}
              >
                These people make good music
                <br />
                Please go check em out :3
              </h4>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContainer
              key={2}
              type={"Artists"}
              data={data.artists.slice(0, 5)}
            />
          </div>
        </div>,
        <div className="row" style={{ width: "100%", margin: "1vw" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContainer
              key={3}
              type={"Albums"}
              data={data.albums.slice(0, 5)}
            />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div className="column preset-fadeInLeft">
              <h1 className="resetMargin" style={{ fontSize: "3vw" }}>
                Top albums
              </h1>
              <h4
                className="resetMargin indentation"
                style={{ fontSize: "2vw" }}
              >
                If I have the patience to
                <br />
                listen through a whole album,
                <br />
                it is most likely very good.
                <br/><small style={{fontSize: "0.9vw"}}>EPs are included as well, so the stats might look a bit wonkyy :3</small>
              </h4>
            </div>
          </div>
        </div>
      ]);
      return;
    };

    getData();
    //window.addEventListener("load",(() => {getData();console.log("penis")})());
  }, []);

  return (
    <div
      className="column centerAlign"
      style={{ padding: "2vw", width: "95vw" }}
    >
      <h1 style={{ fontSize: "3vw" }}>Music stats</h1>
      <h2 style={{ fontSize: "1.5vw" }}>
        Pulled straight from the spotify API :3
      </h2>
      <div className="column" style={{ width: "100%" }}>
        {elements}
      </div>
    </div>
  );
}

export default MusicStats;
