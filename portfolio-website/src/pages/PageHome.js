import { useState, useEffect } from "react";

import "../styles/main.css";
import PageContent from "./PageContent";

function PageHome() {

  let [headerVisible, setHeaderVisible] = useState(true)
  let [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {

    setTimeout(() => {setContentVisible(true); console.log("dfehhfbd")},3100)

    window.onload = () => {
      window.scrollTo(0, 0);
    };
  
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

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
    <div className="container">

      {headerVisible && <div className="row centerAlign" style={{width: "100vw", height: "100vh"}} id="header">
        <div className="column">
            <h1 className="resetMargin" style={{fontSize: "4vw"}}>HAAAAAAIIIIIII</h1>
            <h4 className="resetMargin indentation">welcum to my page :333</h4>
        </div>
          <img src={require("../assets/wave.png")} className="helloImg" alt="haaaiii :3"/>
      </div>}

      {contentVisible && <PageContent/>}

    </div>
  );
}

export default PageHome;
