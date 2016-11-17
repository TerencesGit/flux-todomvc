import React from 'react';
import classNames from 'classnames';
import TodoTextInput from './TodoTextInput';
import AppDispatcher from '../dispatcher/AppDispatcher';
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
			<li key={todo.id}
					className={classNames({
						'completed': todo.complete,
						'editing': this.state.isEditing
					})}>
				<div className="view">
					<input 
					 className="toggle"
					 type="checkbox"
					 checked={todo.complete}
					 onChange={this._onToggleComplete}
					/>
					<label>{todo.text}</label>
					<button className="destroy" 
									onClick={this._onDestroyClick} />
				</div>
				{input}
			</li>
		)
	},
	_onToggleComplete(){
		var id = this.props.todo.id;
		var actionType = this.props.todo.complete ? 
				'TODO_UNDO_COMPLETE' :
				'TODO_COMPLETE';
		AppDispatcher.dispatch({
			actionType: actionType,
			id: id
		})
	},
	_onDestroyClick(){
		AppDispatcher.dispatch({
			actionType: 'TODO_DESTROY',
			id: this.props.todo.id
		})
	}	
})
export default TodoItem;