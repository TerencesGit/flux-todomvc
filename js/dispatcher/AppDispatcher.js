import {Dispatcher} from 'flux';
const AppDispatcher = new Dispatcher();
import TodoStore from '../stores/TodoStore';
AppDispatcher.register(function(action){
	var text;
	switch(action.actionType){
		case 'TODO_CREATE':
			text = action.text.trim();
			if(text !== ''){
				TodoStore.create(text);
				TodoStore.emit('change');
			}
			break;
		case 'TODO_COMPLETE':
			TodoStore.update(action.id, {complete: true});
			TodoStore.emit('change');
			break;
		case 'TODO_UNDO_COMPLETE':
		  TodoStore.update(action.id, {complete: false});
		  TodoStore.emit('change');
		  break;
		case 'TODO_DESTROY':
			TodoStore.destroy(action.id);
			TodoStore.emit('change');
			break;
		case 'TODO_DESTROY_COMPLETED':
			TodoStore.destroyCompleted();
			TodoStore.emit('change');
			break;
		case 'TODO_UPDATE_TEXT':
			text = action.text.trim();
			if(text){
			 TodoStore.update(action.id, {text: text})
			 TodoStore.emit('change')
			}
		 break;
		case 'TODO_COMPLETE_ALL':
			if(TodoStore.areAllComplete()){
				TodoStore.updateAll({complete: false})
			}else{
				TodoStore.updateAll({complete: true})
			}
			TodoStore.emit('change')
			break;
		default: 
			//no op
	}	
})
export default AppDispatcher;