import "./Testimonials.css";
import quoteIcon from "../../assets/images/quote.jpg";
const CardTestimonial = (props) => {
  return (
    <div className="card_testimonial">
      <img src={quoteIcon} className="quote" />
      <p className="testimonial_heading">
        Spreading God&apos;s word, living the right way!
      </p>
      <p className="actual_testimonial">{props.text}</p>
      <div className="person">
        <img src={props.img} className="personPic" />
        <p className="person_name"> {props.name} </p>
      </div>
    </div>
  );
};

export default CardTestimonial;
