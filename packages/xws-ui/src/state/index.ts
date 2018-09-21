import { observable } from 'mobx';

import Ships from './ships';

interface State {
  ships: xws.Ship[];
}

class AppState<State> {
  constructor() {
    this.ships = new Ships();
  }
}

export default AppState;
