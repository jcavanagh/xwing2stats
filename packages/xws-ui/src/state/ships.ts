import { types, ships } from '@xws/data';
import { observable, computed } from 'mobx';

class Ships {
  @computed
  all: types.Ship[];
  constructor() {
    this.all = ships;
  }
}

export default Ships;
