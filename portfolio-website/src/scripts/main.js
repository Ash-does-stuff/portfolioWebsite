const observedClasses = ["fadeInLeft","fadeInRight","fadeInBottom","songCard"]

const getObserver = (classToAdd) => {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.remove("animationStart")
          entry.target.classList.add(classToAdd)
        }
      })
    })
  }
  
export const refreshObservers = () => {
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