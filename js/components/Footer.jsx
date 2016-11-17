import React from 'react';

const Footer = React.createClass({
	render(){
		var allTodos = this.props.data;
		var total = Object.keys(allTodos).length;
		if(total === 0){
			return null;
		}
		var completed = 0;
		for(var key in allTodos){
			if(allTodos[key].completed){
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
					id="clear-completed">
					Clear completed
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
	}
})	
export default Footer;