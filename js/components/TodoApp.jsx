import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
import TodoStore from '../stores/TodoStore';

const TodoApp = React.createClass({
	getInitialState(){
		return TodoStore.getAll()
	},
	componentDidMount() {
		TodoStore.on('change', this._onChange);
	},
	componentWillUnmount() {
		TodoStore.removeListener('change', this._onChange)
	},
	_onChange(){
		this.state = TodoStore.getAll();
		this.forceUpdate()
	},
	render(){
		return(
			<div>
				<Header />
				<MainSection data={this.state} />
				<Footer data={this.state}/>
			</div>
		)
	}
})
export default TodoApp;
