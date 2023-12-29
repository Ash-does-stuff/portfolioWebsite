function AboutMe() {
  return (
      <div className="column centerAlign aboutMe">

        <div className="row preset-fadeInRight" style={{width: "100%", margin: "1vw"}}>
          <div style={{flex: 3, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src={require("../assets/uwuHiBig.png")} />
          </div>
          <div style={{flex:2, display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
            <div className="column">
              <h1 className="resetMargin" style={{ fontSize: "3vw" }}>
                About me
              </h1>
              <h4 className="resetMargin indentation">I kinda code <br /> I guess</h4>
            </div>
          </div>
        </div>


        <div className="row preset-fadeInLeft" style={{width: "100%", margin: "1vw"}}>
          <div style={{flex:2, display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
            <div className="column">
              <h1 className="resetMargin" style={{ fontSize: "3vw" }}>
                About me 2
              </h1>
              <h4 className="resetMargin indentation fadeInLeft">I also kinda like music<br /> I guess</h4>
            </div>
          </div>
          <div style={{flex: 3, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src={require("../assets/uwuHiBig.png")} />
          </div>
        </div>


        <div className="row" style={{width: "100%", margin: "1vw"}}>
          <div style={{flex:1, display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
            <div className="column">
              <h1 className="resetMargin" style={{ fontSize: "3vw", textAlign: "center" }}>
                thats about it :p
              </h1>
            </div>
          </div>
        </div>


      </div >
  );
}

export default AboutMe;
