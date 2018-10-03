import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import Ships from './ships';
import AppState from './state';

@observer
class TimerView extends React.Component<{ appState: AppState }, {}> {
  render() {
    return (
      <div>
        <Ships />
        <DevTools />
      </div>
    );
  }
}

const appState = new AppState();
ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));
