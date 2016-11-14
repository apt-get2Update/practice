import React from 'react';
import ReactDOM from 'react-dom';
//import Game from './game/Game'
//import './App.css';
//import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import Radiobutton from './casa/Radiobutton'
const MyApp = () => (


<MuiThemeProvider>
    <Radiobutton />
   </MuiThemeProvider>


);

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);
