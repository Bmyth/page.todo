import Vue from 'vue';
import Vuex from 'vuex';

import Onion from '../lib/onion.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		currentTaskIndex: [],
		tasks: []
	},
	getters: {
		currentTasks: state => {
			return state.currentTaskIndex.map( i => {
				return Onion.getTask(state.tasks, i.id, i.parentId)
			})
		}
	},
	mutations: {
		init (state) {
			state.currentTaskIndex = Onion.load('currentTaskIndex');
			state.tasks = Onion.load('tasks');
		},
		taskCreate (state, params) {
			let task = {
				id: Onion.guid(),
				parentId: params.parentId || '',
				text: params.text
			}
			Onion.addTask(state.tasks, task);
			Onion.save('tasks', state.tasks)
			if(params.current){
				state.currentTaskIndex.unshift({id: task.id, parentId: task.parentId});
				Onion.save('currentTaskIndex', state.currentTaskIndex)
			}
		},
		taskUpdate (state, task) {
			Onion.updateTask(state.tasks, task);
			Onion.save('tasks', state.tasks);
			if(task.finish !== undefined){
				state.currentTaskIndex = Onion.clearCurrentIndex(state.tasks, state.currentTaskIndex);
				Onion.save('currentTaskIndex', state.currentTaskIndex)
			}
		},
		taskPrepend (state, params) {
			let parentTask = Onion.getTask(state.tasks, params.parentId);
			if(parentTask){
				parentTask.child = parentTask.child || []
				let task = {
					id: Onion.guid(),
					parentId: parentTask.id,
					text: params.text
				}
				parentTask.child.unshift(task);
				Onion.sortTasksByStatus(parentTask.child, 'finishAtHead');
				Onion.save('tasks', state.tasks);

				let i = state.currentTaskIndex.findIndex((i) => {return i.id == params.originId})
				if(i >= 0){
					state.currentTaskIndex.splice(i, 1, {id: task.id, parentId: task.parentId}); 
					Onion.save('currentTaskIndex', state.currentTaskIndex)
				}
			}
		},
		taskPickUp (state, params) {
			state.currentTaskIndex.unshift({id: params.id, parentId: params.parentId}); 
			Onion.save('currentTaskIndex', state.currentTaskIndex)
		},
		taskFinish (state, params) {
			params.finish = true;
			Onion.updateTask(state.tasks, params);
			Onion.save('tasks', state.tasks);

			state.currentTaskIndex = Onion.clearCurrentIndex(state.tasks, state.currentTaskIndex);
			Onion.save('currentTaskIndex', state.currentTaskIndex)
		},
		taskPutBack (state, params) {
			let i = state.currentTaskIndex.findIndex((i) => {return i.id == params.id})
			if(i >= 0){
				state.currentTaskIndex.splice(i, 1); 
			}
			Onion.save('currentTaskIndex', state.currentTaskIndex)
		},
		taskDelete (state, params) {
			Onion.deleteTask(state.tasks, params);
			Onion.save('tasks', state.tasks);
			let i = state.currentTaskIndex.findIndex((i) => {return i.id == params.id})
			if(i >= 0){
				state.currentTaskIndex.splice(i, 1); 
			}
			Onion.save('currentTaskIndex', state.currentTaskIndex);
		}
	},
	actions: {
	}
});
 
export default store;