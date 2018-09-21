import * as React from 'react';
import { observer } from 'mobx-react';

@observer
class Ships extends React.Component {
  renderShip() {
    return;
  }
  render() {
    return this.props.ships.all;
  }
}

export default Ships;
