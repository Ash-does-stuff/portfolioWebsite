function AboutMe() {
  return (
      <div className="column centerAlign aboutMe">

        <div className="row" style={{width: "100%", margin: "1vw"}}>
          <div style={{flex: 3, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src={require("../assets/uwuHiBig.png")} style={{width: "30vw"}}/>
          </div>
          <div style={{flex:2, display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
            <div className="column">
              <h1 className="resetMargin" style={{ fontSize: "3vw" }}>
                About me
              </h1>
              <h4 className="resetMargin indentation" style={{fontSize: "2vw"}}>I kinda code <br /> I guess</h4>
            </div>
          </div>
        </div>


        <div className="row preset-fadeInLeft" style={{width: "100%", margin: "1vw"}}>
          <div style={{flex:2, display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
            <div className="column">
              <h1 className="resetMargin" style={{ fontSize: "3vw" }}>
                About me 2
              </h1>
              <h4 className="resetMargin indentation fadeInLeft" style={{fontSize: "2vw"}}>I also kinda like music<br /> I guess</h4>
            </div>
          </div>
          <div style={{flex: 3, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src={require("../assets/uwuHiBig.png")} style={{width: "30vw"}}/>
          </div>
        </div>

      </div >
  );
}

export default AboutMe;
