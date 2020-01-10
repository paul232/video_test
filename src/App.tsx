import React from 'react';

import VideoPlayer from './components/VidePlayer';

import './App.scss';

const App: React.FC = () => {
	return (
		<div className="app">
			<VideoPlayer camNum={561} />
		</div>
	);
}

export default App;
