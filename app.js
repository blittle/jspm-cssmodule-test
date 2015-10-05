import React from 'react';
import ReactDOM from 'react-dom';

import styles from './app.css!';

function App() {
	return (
		<div className={styles.myRule}>Hello</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('app'))

