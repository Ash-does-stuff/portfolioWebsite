import "../styles/main.css"

function WelcomeAnimation() {
  return (
    <div className="anim-bg">
      <img src={require("../assets/sphere.gif")} className="anim-img" alt="Welcome (heyaa :3)"/>
    </div>
  );
}

export default WelcomeAnimation;
