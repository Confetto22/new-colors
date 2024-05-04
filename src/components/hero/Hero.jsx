import "./Hero.css";
import ContactBt from "./ContactBt";
import Card from "./Card";
import Reach from "./Reach";
import SecHeading from "../general-reuse/SecHead";

const reachDetails = [
  {
    id: 1,
    icon: "fa-solid fa-church cardIcon",
    reachHeading: "Mystery Temple",
    reachInfo: "Tatop Weija Accra, Ghana.",
    link: "#",
  },
  {
    id: 2,
    icon: "fa-solid fa-phone cardIcon",
    reachHeading: "Call Us Now",
    reachInfo: "+233(0)-597-127-775",
    link: "#",
  },
  {
    id: 3,
    icon: "fa-solid fa-envelope cardIcon",
    reachHeading: "Send a Message",
    reachInfo: "homchapel@gmail.com",
    link: "mailto:homchapel@gmail.com",
  },
];

function createReachDetail(singleReach) {
  return (
    <Reach
      icon={singleReach.icon}
      reachHead={singleReach.reachHeading}
      reachInfo={singleReach.reachInfo}
      link={singleReach.link}
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
            mainheading="Home For The Lost And Broken"
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
