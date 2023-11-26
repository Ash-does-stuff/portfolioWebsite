function AboutMe() {
  return (
    <div
      className="row centerAlign"
      style={{ width: "100vw", height: "100vh" }}
      id="header"
    >
      <div className="column">
        <div className="row centerAlign">
          <img src={require("../assets/uwuHiBig.png")} />
          <div className="column">
          <h1 className="resetMargin" style={{ fontSize: "4vw" }}>
            HAAAAAAIIIIIII
          </h1>
          <h4 className="resetMargin indentation">welcum to my page :333</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
