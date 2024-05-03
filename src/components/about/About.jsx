import "./About.css";
import CheckCard from "./CheckCard";
import childPlay from "../../assets/images/stefan-kunze-oLdm7mnhDic-unsplash.jpg";
import SecHeading from "../general-reuse/SecHead";

const checkCardDetails = [
  {
    id: 1,
    icon: "fa-solid fa-check checkIcon",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, suscipit.",
  },
  {
    id: 2,
    icon: "fa-solid fa-check checkIcon",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, suscipit.",
  },
  {
    id: 3,
    icon: "fa-solid fa-check checkIcon",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, suscipit.",
  },
];

function createCheckCard(singleCheckCard) {
  return <CheckCard icon={singleCheckCard.icon} text={singleCheckCard.text} />;
}

const About = () => {
  return (
    <section className="about">
      <div className="about_text">
        <SecHeading
          subheading="about us"
          mainheading="Connecting Faith, Building Community"
        />

        <p className="about_intro">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          asperiores delectus quaerat maxime ducimus quasi ad consectetur, ipsum
          nesciunt obcaecati aliquam similique itaque fuga!
        </p>
        <div className="allcheck_cards">
          {checkCardDetails.map(createCheckCard)}
        </div>
        <button className="learn_more">Learn More</button>
      </div>
      <div className="about_image_card">
        <img src={childPlay} className="childplay" />
        <div className="members_stats">
          <i className="fa-solid fa-face-grin-tongue grin"></i>
          <div>
            <p className="number">1500+</p>
            <p className="number_detail">Active Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
