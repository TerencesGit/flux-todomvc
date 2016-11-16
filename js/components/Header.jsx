import React from 'react';
import TodoTextInput from './TodoTextInput';
import AppDispatcher from '../dispatcher/AppDispatcher';

const Header = React.createClass({
	_onSave(text){
			if(text.trim()){
				AppDispatcher.dispatch({
					actionType: 'TODO_CREATE',
					text: text
				})
			}
	},
	render(){
		return (
			<header>
				<h1>todos</h1>
				<TodoTextInput 
				  id="new-todo"
				  placeholder="What needs to be done?"
				  onSave={this._onSave} 
				/>
			</header>
		)
	}
})
export default Header;