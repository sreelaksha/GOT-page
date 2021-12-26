import React from "react";
import { Switch, Route } from "react-router-dom";
import HousesComponent from "./components/house/HousesComponent";
import CharactersComponent from "./components/character/CharactersComponent";
import BooksComponent from "./components/book/BooksComponent";
import HouseDetailsComponent from "./components/house/HouseDetailsComponent";
import CharacterDetailsComponent from "./components/character/CharacterDetailsComponent";
import BookDetailsComponent from "./components/book/BookDetailsComponent";
import { Grommet } from "grommet";

const App = () => {
  return (
    <Grommet full={true}>
      <Switch>
        <Route path="/house/:id" component={HouseDetailsComponent} />
        <Route path="/character/:id" component={CharacterDetailsComponent} />
        <Route path="/characters" component={CharactersComponent} />
        <Route path="/books" component={BooksComponent} />
        <Route path="/book/:id" component={BookDetailsComponent} />
        <Route path="/" component={HousesComponent} />
      </Switch>
    </Grommet>
  );
};

export default App;
