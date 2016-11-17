import AppDispatcher from '../dispatcher/AppDispatcher';

var TodoActions = {
	create(text){
		AppDispatcher.dispatch({
			actionType: 'TODO_CREATE',
			text: text
		})
	},
	toggleComplete(todo){
		var id = todo.id;
		var actionType = todo.complete ? 
				'TODO_UNDO_COMPLETE' :
				'TODO_COMPLETE';
		AppDispatcher.dispatch({
			actionType: actionType,
			id: id
		})
	},
	toggleCompleteAll(){
		AppDispatcher.dispatch({
			actionType: 'TODO_COMPLETE_ALL'
		})
	},
	updateText(text,id){
		AppDispatcher.dispatch({
			actionType: 'TODO_UPDATE_TEXT',
			id: id,
			text: text
		});
	},
	destroy(id){
		AppDispatcher.dispatch({
			actionType: 'TODO_DESTROY',
			id: id
		})
	},
	destroyCompleted(){
		AppDispatcher.dispatch({
			actionType: 'TODO_DESTROY_COMPLETED'
		})
	}
}
export default TodoActions;