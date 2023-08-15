/** app.js
 *
 * Entry for bundling by webpack.
 * for example, if you have your own script, or plguin,
 * you can import that.
 * ex) import "./bower_components/animate.css/animate.min.css"
 *
 * you are able to include js, css
 * if you want to contain other scripts like .ts, .less, .sass,
 * set the loaders in tidory.config.js
 *
 * after import assets it will be contained in app.js
 */

/* React */
import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';
import Appt from '../components/Appt';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Appt />, document.getElementById('appt'));
