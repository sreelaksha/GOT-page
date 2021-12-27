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
        <Route
          path="/gameofthrones-overview/house/:id"
          component={HouseDetailsComponent}
        />
        <Route
          path="/gameofthrones-overview/character/:id"
          component={CharacterDetailsComponent}
        />
        <Route
          path="/gameofthrones-overview/characters"
          component={CharactersComponent}
        />
        <Route
          path="/gameofthrones-overview/books"
          component={BooksComponent}
        />
        <Route
          path="/gameofthrones-overview/book/:id"
          component={BookDetailsComponent}
        />
        <Route path="/gameofthrones-overview/" component={HousesComponent} />
      </Switch>
    </Grommet>
  );
};

export default App;
