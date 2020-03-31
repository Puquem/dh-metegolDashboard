import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// "./" hace referencia a un archivo dentro de la misma carpeta 
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();