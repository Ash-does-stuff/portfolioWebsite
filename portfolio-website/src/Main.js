import { useEffect } from 'react';
import WelcomeAnimation from './components/WelcomeAnimation';
import PageHome from "./pages/PageHome";

function Main() {

  const timeBeforeStart = 3200
  const observedClasses = ["fadeInLeft","fadeInRight","fadeInBottom","songCard"]

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
    
    const refreshObservers = () => {
      observedClasses.forEach((className) => {
      let elements = document.getElementsByClassName("preset-" + className)
      let objs = [].slice.call(elements);
      if (objs) {
        objs.forEach((element) => {
          element.classList.remove("preset-" + className);
          element.classList.add("animationStart");
          getObserver(className).observe(element)
        })
        }
    })}

    setTimeout(setInterval(() => {
      observedClasses.forEach((className) => {
      let elements = document.getElementsByClassName("preset-" + className)
      let objs = [].slice.call(elements);
      if (objs) {
        objs.forEach((element) => {
          element.classList.remove("preset-" + className);
          element.classList.add("animationStart");
          getObserver(className).observe(element)
        })
        }
    })},100),timeBeforeStart)
    
  })

  return (
    <>
      <WelcomeAnimation/>
      <PageHome/>
    </>
  );
}

export default Main;
