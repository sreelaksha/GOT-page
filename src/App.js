import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HouseComponent from './components/HouseComponent'
import HouseDetailsComponent from './components/HouseDetailsComponent'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
          <Switch>
                <Route path = "/house/:id" component = {HouseDetailsComponent} />
                <Route path = "/" component = {HouseComponent} />
          </Switch>
      </div>
  );
}
}

export default App;
