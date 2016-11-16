import React from 'react';
import TodoItem from './TodoItem';

const MainSection = React.createClass({
	render(){
		if(Object.keys(this.props.data).length < 1){
			return null;
		}
		var allTodos = this.props.data;
		var todos = [];
		for(var key in allTodos){
			todos.push(<TodoItem key={key} todo={allTodos[key]} />);
		}
		return (
			<section id="main">
				<input
					id="toggle-all"
					type="checkbox"
				/>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul id="todolist">{todos}</ul>
			</section>
		)
	}
})

export default MainSection;