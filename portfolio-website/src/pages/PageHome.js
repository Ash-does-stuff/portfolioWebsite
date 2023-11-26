import { useState, useEffect } from "react";

import "../styles/main.css";

function PageHome() {

  let [headerVisible, setHeaderVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        
        if (!entry.isIntersecting) {
          console.log(entry)
          setHeaderVisible(false)
        }
      })
    })

    let obj = document.getElementById("header")
    if (obj) {observer.observe(obj)}
  })

  return (
    <div className="container"onScroll={() => {console.log("haai")}}>

      {headerVisible && <div className="row centerAlign" style={{width: "100vw", height: "100vh"}} id="header">
        <div className="column">
            <h1 className="resetMargin" style={{fontSize: "4vw"}}>HAAAAAAIIIIIII</h1>
            <h4 className="resetMargin indentation">welcum to my page :333</h4>
        </div>
          <img src={require("../assets/wave.png")} className="helloImg" alt="haaaiii :3"/>
      </div>}

      <div className="row centerAlign" style={{width: "100vw", height: "100vh"}}>
        <div className="column">
            <h1 className="resetMargin" style={{fontSize: "4vw"}}>Hey there!</h1>
            <h4 className="resetMargin indentation">welcum to my page :333</h4>
        </div>
          <img src={require("../assets/wave.png")} className="helloImg" alt="haaaiii :3"/>
      </div>

      <div className="row centerAlign" style={{width: "100vw", height: "100vh"}}>
        <div className="column">
            <h1 className="resetMargin" style={{fontSize: "4vw"}}>Hey there!</h1>
            <h4 className="resetMargin indentation">welcum to my page :333</h4>
        </div>
          <img src={require("../assets/wave.png")} className="helloImg" alt="haaaiii :3"/>
      </div>

      <div className="row centerAlign" style={{width: "100vw", height: "100vh"}}>
        <div className="column">
            <h1 className="resetMargin" style={{fontSize: "4vw"}}>Hey there!</h1>
            <h4 className="resetMargin indentation">welcum to my page :333</h4>
        </div>
          <img src={require("../assets/wave.png")} className="helloImg" alt="haaaiii :3"/>
      </div>

    </div>
  );
}

export default PageHome;
