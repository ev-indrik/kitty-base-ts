import { useEffect, useState, ChangeEvent } from "react";

import CardsList from "./components/card_list/card_list_component";
import SearchBox from "./components/search_box/search_box_component";

import { getData } from "./utils/data.utils";

import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => {
    //     setMonsters(users);
    //     setFilteredMonsters(users);
    //   });

    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((it) => {
      return it.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
