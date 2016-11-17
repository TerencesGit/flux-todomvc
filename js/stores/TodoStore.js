import {EventEmitter} from 'events';
import assign from 'object-assign';

var _todos = {};
const TodoStore = assign({}, EventEmitter.prototype, {
	getAll(){
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
})
export default TodoStore;
