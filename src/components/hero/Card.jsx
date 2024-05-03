import cardPic from "../../assets/images/man-in-a-wooden-church-silhouetted-PCME56L.jpg";

const Card = () => {
  return (
    <div className="card">
      <img src={cardPic} className="cardPic" />
      <i className="fa-solid fa-ankh ankh"></i>
      <i className="fa-solid fa-church church"></i>
    </div>
  );
};

export default Card;
