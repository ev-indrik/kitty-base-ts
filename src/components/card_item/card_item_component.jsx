import "./card_item_component_style.css";

const CardItem = ({ monsterIt }) => {
  const { id, name, email } = monsterIt;

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
        alt={`it's a ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardItem;
