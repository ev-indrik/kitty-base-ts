import CardItem from "../card_item/card_item_component";
import "./card_list_component_style.css";

const CardsList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardItem monsterIt={monster} key={monster.id} />;
    })}
  </div>
);

export default CardsList;
