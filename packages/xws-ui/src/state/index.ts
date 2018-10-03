import { observable } from 'mobx';

import Ships from './ships';

class AppState {
  ships: Ships;
  constructor() {
    this.ships = new Ships();
  }
}

export default AppState;
