import { useEffect } from 'react';
import WelcomeAnimation from './components/WelcomeAnimation';
import PageHome from "./pages/PageHome";

function App() {

  const timeBeforeStart = 3200
  const observedClasses = ["fadeInLeft","fadeInRight"]

  //ANIMATIONS
  useEffect(() => {

    const getObserver = (classToAdd) => {
      return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("animationStart")
            entry.target.classList.add(classToAdd)
          }
        })
      })
    }
    
    setTimeout(() => {
      observedClasses.forEach((className) => {
      let elements = document.getElementsByClassName("preset-" + className)
      let objs = [].slice.call(elements);
      console.log(objs)
      if (objs) {
        objs.forEach((element) => {
          element.classList.remove("preset-" + className);
          element.classList.add("animationStart");
          getObserver(className).observe(element)
        })
        
      }
      //if (objs) {getObserver(className).observe(objs)}
    })},timeBeforeStart)
    
  })

  return (
    <>
      <WelcomeAnimation/>
      <PageHome/>
    </>
  );
}

export default App;
