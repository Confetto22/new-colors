import "./Hero.css";

const Reach = (props) => {
  return (
    <div className="visit_church">
      <i className={props.icon}></i>
      <p className="reach_text"> {props.reachHead} </p>
      <p className="reach_detail"> {props.reachInfo} </p>
    </div>
  );
};

export default Reach;
