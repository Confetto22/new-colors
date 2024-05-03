import "./Hero.css";
import ContactBt from "./ContactBt";
import Card from "./Card";
import Reach from "./Reach";
import SecHeading from "../general-reuse/SecHead";

const reachDetails = [
  {
    id: 1,
    icon: "fa-solid fa-church cardIcon",
    reachHeading: "Visit Our Church",
    reachInfo: "323 Valley Lane, Austin",
  },
  {
    id: 2,
    icon: "fa-solid fa-phone cardIcon",
    reachHeading: "Call Us Now",
    reachInfo: "+1 (234) 567 890 00",
  },
  {
    id: 3,
    icon: "fa-solid fa-envelope cardIcon",
    reachHeading: "Send a Message",
    reachInfo: "agrace.church@gmail.com",
  },
];

function createReachDetail(singleReach) {
  return (
    <Reach
      icon={singleReach.icon}
      reachHead={singleReach.reachHeading}
      reachInfo={singleReach.reachInfo}
    />
  );
}

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_top">
        <div className="hero_text">
          <SecHeading
            subheading="welcome to hom chapel"
            mainheading="Embracing All with Redeeming Love"
          />

          <p className="hero_info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nam,
            consequuntur et debitis ea in quae deserunt modi architecto est
            ipsa.
          </p>
          <div className="hero_buttons">
            <button className="getStartedd">Get Started</button>
            <ContactBt />
          </div>
        </div>
        <Card />
      </div>
      <div className="reach">{reachDetails.map(createReachDetail)}</div>
    </section>
  );
};

export default Hero;
