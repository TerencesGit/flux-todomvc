import {EventEmitter} from 'events';
import assign from 'object-assign';

var _todos =  JSON.parse(localStorage.getItem('react-todos')) || {};
const TodoStore = assign({}, EventEmitter.prototype, {
	getAll(){
		localStorage.setItem('react-todos',JSON.stringify(_todos))    
		return _todos;
	},
	create(text){
		var id = (+new Date() + Math.floor(Math.random() * 999999	)).toString(36);
		_todos[id] = {
			id: id,
			complete: false,
			text: text
		}
	},
	update(id, updates){
		_todos[id] = assign({}, _todos[id], updates)
	},
	destroy(id){
		delete _todos[id]
	},
	destroyCompleted(){
		for(var id in _todos){
			if(_todos[id].complete){
				this.destroy(id)
			}
		}
	},
	areAllComplete(){
		for(var id in _todos){
			if(!_todos[id].complete){
				return false
			}
		}
		return true;
	},
	updateAll(updates){
		for(var id in _todos){
			this.update(id, updates)
		}
	}
})
export default TodoStore;
