import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HouseComponent from './components/HouseComponent'
import HouseDetailsComponent from './components/HouseDetailsComponent'
import CharacterDetailsComponent from './components/CharacterDetailsComponent'
import BookDetailsComponent from './components/BookDetailsComponent'
import { Grommet } from "grommet"

const App = () => {
    return (
      <Grommet>
        <div>
            <Switch>
                  <Route path = "/house/:id" component = {HouseDetailsComponent} />
                  <Route path = "/character/:id" component = {CharacterDetailsComponent} />
                  <Route path = "/book/:id" component = {BookDetailsComponent} />
                  <Route path = "/" component = {HouseComponent} />
            </Switch>
        </div>
      </Grommet>
  );
}

export default App;
