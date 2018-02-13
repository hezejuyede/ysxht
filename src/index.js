import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './router/routes'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('App'));
registerServiceWorker();
