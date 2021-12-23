import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HouseComponent from './components/HouseComponent'
import HouseDetailsComponent from './components/HouseDetailsComponent'
import CharacterDetailsComponent from './components/CharacterDetailsComponent'
import BookDetailsComponent from './components/BookDetailsComponent'

class App extends React.Component {
  render() {
    return (
      <div>
          <Switch>
                <Route path = "/house/:id" component = {HouseDetailsComponent} />
                <Route path = "/character/:id" component = {CharacterDetailsComponent} />
                <Route path = "/book/:id" component = {BookDetailsComponent} />
                <Route path = "/" component = {HouseComponent} />
          </Switch>
      </div>
  );
}
}

export default App;
