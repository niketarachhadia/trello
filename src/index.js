import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import './index.css';

const lists= [
		{'To Do': ['return shoes','call mom']},
		{'Doing':['Laundry','fix bath cabinate']},
		{'Done':['go to bank','get a hair cut']}
	]

ReactDOM.render(
  <Board title="Things to get done" lists={lists}/>,
  document.getElementById('root')
);


