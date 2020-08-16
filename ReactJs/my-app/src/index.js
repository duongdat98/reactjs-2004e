import React from 'react';
import ReactDOM from 'react-dom';
import App from './hooks/Hooks'
// import Hooks from './hooks/Hooks'
// import App from './jsx-pratice/toDo'
// import App from './jsx-pratice/App';
import * as serviceWorker from './serviceWorker';
// import App from './lifecycle/Parent'
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
