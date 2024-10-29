import CardItem from "../card_item/card_item_component";
import { Monster } from "../../App";

import "./card_list_component_style.css";

type CardListProps = {
  monsters: Monster[];
};

const CardsList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardItem monsterIt={monster} key={monster.id} />;
    })}
  </div>
);

export default CardsList;
