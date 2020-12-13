import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FlagsScreen from './Components/FlagsScreen/FlagsScreen.js';
import InfoScreen from './Components/InfoScreen/InfoScreen.js';
import IndexVolcanoes from './Components/Maps/Volcanoes/IndexVolcanoes.js';
import IndexFires from './Components/Maps/WildFires/IndexFires.js';
import IndexCyclones from './Components/Maps/Cyclones/IndexCyclones';

function App() {
  return (
    <>
      <Switch>
        <Route path='/volcanoes' component={IndexVolcanoes} />
        <Route path='/cyclones' component={IndexCyclones} />
        <Route path='/wildfires' component={IndexFires} />
        <Route path='/home' exact component={FlagsScreen} />
        <Route path='/:id/data' component={InfoScreen} />
      </Switch>
    </>
  );
}

export default App;
