import React from 'react';
import TodoTextInput from './TodoTextInput';
import TodoActions from '../actions/TodoActions';
const Header = React.createClass({
	_onSave(text){
			if(text.trim()){
				TodoActions.create(text)
			}
	},
	render(){
		return (
			<header id="header">
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