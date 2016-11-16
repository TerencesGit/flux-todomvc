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
			</li>
		)
	}
})
export default TodoItem;