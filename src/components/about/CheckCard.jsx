import "./About.css";

const CheckCard = (props) => {
  return (
    <div className="check_card">
      <i className={props.icon} id="checkIcon"></i>
      <p className="check_text"> {props.text} </p>
    </div>
  );
};

export default CheckCard;
