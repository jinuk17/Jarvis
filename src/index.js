import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

window.onload = function(){
  document.getElementById('loader').classList.add('hide')

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}
