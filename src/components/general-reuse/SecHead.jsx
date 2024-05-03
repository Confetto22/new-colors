import "../../App.css";

const SecHeading = (props) => {
  return (
    <div className="secheading">
      <p className="subheading">{props.subheading}</p>
      <p className="mainheading"> {props.mainheading} </p>
    </div>
  );
};

export default SecHeading;
