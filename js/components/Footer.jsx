import React from 'react';
import AppDispatcher from '../dispatcher/AppDispatcher';
const Footer = React.createClass({
	render(){
		var allTodos = this.props.data;
		var total = Object.keys(allTodos).length;
		if(total === 0){
			return null;
		}
		var completed = 0;
		for(var key in allTodos){
			if(allTodos[key].complete){
				completed++;
			}
		}
		var itemsLeft = total - completed;
		var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
		itemsLeftPhrase += 'left';

		var clearCompletedButton;
		if(completed){
			clearCompletedButton = 
				<button
					id="clear-completed"
					onClick={this._onClearCompletedClick}>
					Clear completed ({completed})
				</button>
		}
		return (
			<footer id="footer">
				<span id="todo-count">
					<strong>{itemsLeft}</strong>
					{itemsLeftPhrase}
				</span>
				{clearCompletedButton}
			</footer>
		)
	},
	_onClearCompletedClick(){
		AppDispatcher.dispatch({
			actionType: 'TODO_DESTROY_COMPLETED'
		})
	}
})	
export default Footer;