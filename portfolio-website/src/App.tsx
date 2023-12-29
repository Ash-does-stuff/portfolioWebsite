import { useEffect } from 'react';
import WelcomeAnimation from './components/WelcomeAnimation';
import PageHome from "./pages/PageHome";

function App() {

  const timeBeforeStart = 3200
  const observedIds = ["fadeInLeft"]

  useEffect(() => {

    const getObserver = (classToAdd:string) => {
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
      observedIds.forEach((id) => {
      let objs = document.getElementById(id)
      console.log(objs)
      if (objs) {getObserver(id).observe(objs)}
    })
        
      
    },timeBeforeStart)
    
  })

  return (
    <>
      <WelcomeAnimation/>
      <PageHome/>
    </>
  );
}

export default App;
