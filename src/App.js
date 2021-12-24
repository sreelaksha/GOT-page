import React from "react";
import { Switch, Route } from "react-router-dom";
import HousesComponent from "./components/HousesComponent";
import CharactersComponent from "./components/CharactersComponent";
import BooksComponent from "./components/BooksComponent";
import HouseDetailsComponent from "./components/HouseDetailsComponent";
import CharacterDetailsComponent from "./components/CharacterDetailsComponent";
import BookDetailsComponent from "./components/BookDetailsComponent";
import { Grommet } from "grommet";

const App = () => {
  return (
    <Grommet>
      <div>
        <Switch>
          <Route path="/house/:id" component={HouseDetailsComponent} />
          <Route path="/character/:id" component={CharacterDetailsComponent} />
          <Route path="/characters" component={CharactersComponent} />
          <Route path="/books" component={BooksComponent} />
          <Route path="/book/:id" component={BookDetailsComponent} />
          <Route path="/" component={HousesComponent} />
        </Switch>
      </div>
    </Grommet>
  );
};

export default App;
