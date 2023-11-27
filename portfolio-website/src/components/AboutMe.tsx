function AboutMe() {
  return (
      <div className="column centerAlign aboutMe">
        <div className="row" style={{}}>
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
      </div >
  );
}

export default AboutMe;
