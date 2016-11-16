import React from 'react';
import classNames from 'classnames';
import TodoTextInput from './TodoTextInput';

const TodoItem = React.createClass({
	getInitialState(){
		return {
			isEditing: false
		}
	},
	render(){
		var todo = this.props.todo;
		var input;
		if(this.state.isEditing){
			input = <TodoTextInput 
								className="edit"
								onSave={this._onSave}
								value={todo.text}
							/>;
		}
		return(
			<li key={todo.id}>
				<div className="view">
					<input 
					 className="toggle"
					 type="checkbox"
					/>
					<label>{todo.text}</label>
					<button className="destroy" />
				</div>
				{input}
			</li>
		)
	}
})
export default TodoItem;