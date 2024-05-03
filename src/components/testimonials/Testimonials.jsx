import "./Testimonials.css";
import CardTestimonial from "./CardTestimonial";
import SecHeading from "../general-reuse/SecHead";

const testimonialDetails = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum recusandae nam neque, culpa facilis illo optio magni est aut a necessitatibus repudiandae maxime nobis quod perferendis. Dolore, error rerum.",
    pic: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGdpcmwlMjBydW5uaW5nJTIwaW4lMjBjaHVyY2h8ZW58MHx8MHx8fDA%3D",
    name: "Wilson Thomas",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum recusandae nam neque, culpa facilis illo optio magni est aut a necessitatibus repudiandae maxime nobis quod perferendis. Dolore, error rerum.",
    pic: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGdpcmwlMjBydW5uaW5nJTIwaW4lMjBjaHVyY2h8ZW58MHx8MHx8fDA%3D",
    name: "Wilson Thomas",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum recusandae nam neque, culpa facilis illo optio magni est aut a necessitatibus repudiandae maxime nobis quod perferendis. Dolore, error rerum.",
    pic: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGdpcmwlMjBydW5uaW5nJTIwaW4lMjBjaHVyY2h8ZW58MHx8MHx8fDA%3D",
    name: "Wilson Thomas",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum recusandae nam neque, culpa facilis illo optio magni est aut a necessitatibus repudiandae maxime nobis quod perferendis. Dolore, error rerum.",
    pic: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGdpcmwlMjBydW5uaW5nJTIwaW4lMjBjaHVyY2h8ZW58MHx8MHx8fDA%3D",
    name: "Wilson Thomas",
  },
];

function createTestimonial(singleTestimonial) {
  return (
    <CardTestimonial
      text={singleTestimonial.text}
      img={singleTestimonial.pic}
      name={singleTestimonial.name}
    />
  );
}

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials_intro">
        <SecHeading
          subheading="testimonials"
          mainheading="Growing Together in God's Word"
        />

        <p className="testimonial_introText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          dolores corporis accusamus quae eveniet est.
        </p>
        <button className="view_more">View More</button>
      </div>
      <div className="all_testimonials">
        {testimonialDetails.map(createTestimonial)}
      </div>
    </section>
  );
};

export default Testimonials;
