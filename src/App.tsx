import { useEffect, useState } from "react";
import "./App.css";
import CardsList from "./components/card_list/card_list_component";
import SearchBox from "./components/search_box/search_box_component";

function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
        setFilteredMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((it) => {
      return it.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Furry Kitty Monsters</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="🐈 search fur monsters"
        className="monster_search-box"
      />
      <CardsList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
