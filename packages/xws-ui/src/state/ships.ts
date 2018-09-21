import { ships } from '@xws/data';
import { observable, computed } from 'mobx';

class Ships {
  @computed
  all: xws.Ship[] = ships;
}

export default Ships;
