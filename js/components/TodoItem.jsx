import React from 'react';
import classNames from 'classnames';
import TodoTextInput from './TodoTextInput';
import TodoActions from '../Actions/TodoActions';
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
					<label onDoubleClick={this._onDoubleClick}>
						{todo.text}
					</label>
					<button className="destroy" 
									onClick={this._onDestroyClick} />
				</div>
				{input}
			</li>
		)
	},
	_onToggleComplete(){
		TodoActions.toggleComplete(this.props.todo)
	},
	_onDestroyClick(){
		TodoActions.destroy(this.props.todo.id)
	},
	_onDoubleClick(){
		this.setState({
			isEditing: true
		})
	},
	_onSave(text){
		TodoActions.updateText(text,this.props.todo.id)
		this.setState({
			isEditing: false
		})
	}
})
export default TodoItem;