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
		default: 
			//no op
	}	
})
export default AppDispatcher;