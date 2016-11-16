import React from 'react';

import Header from './Header';
import MainSection from './MainSection';
const TodoApp = React.createClass({
	getInitialState(){
		return {}
	},
	render(){
		return(
			<div>
				<Header />
				<MainSection data={this.state}/>
			</div>
		)
	}
})
export default TodoApp;
