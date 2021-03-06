var Onion = {};

Onion.save = function(key, data) {
	localStorage.setItem(key, JSON.stringify(data))
}

Onion.load = function(key) {
	var data = JSON.parse(localStorage.getItem(key)) || [];
	if(key == 'tasks'){
		data.forEach(function(i){
			i.child = i.child || [];
		})
	}
	console.log(data)
	return data;
}

Onion.guid = function() {
	return '' + Date.now();
}

Onion.getTask = function(tasks, id, parentId) {
	if(parentId){
		var p = tasks.find((i) => {return i.id == parentId});
		if(p){
			return p.child.find((i) => {return i.id == id})
		}
	}
	return tasks.find((i) => {return i.id == id});
}

Onion.addTask = function(tasks, task){
	if(task.parentId){
		var p = tasks.find((i) => {return i.id == task.parentId});
		p.child = p.child || [];
		p.child.unshift(task);
		Onion.sortTasksByStatus(p.child, 'child');
	}else{
		tasks.unshift(task);
		Onion.sortTasksByStatus(tasks);
	}
}

Onion.updateTask = function(tasks, task, currentIndex){
	var p = null;
	var idx = 0;
	var t = null;
	//index
	if(task.parentId){
		p = tasks.find((i) => {return i.id == task.parentId});
		idx = p.child.findIndex((i) => {return i.id == task.id});
		t = p.child[idx];
	}else{
		idx = tasks.findIndex((i) => {return i.id == task.id}) 
		t = tasks[idx];
	}
	//update
	t.text = task.text;
	if(task.finish !== undefined){
		t.finish = task.finish;
	}

	//sort
	if(p){
		Onion.sortTasksByStatus(p.child, 'child');
	}else{
		Onion.sortTasksByStatus(tasks);
	}

	//update parent
	if(task.updateParentId){
		var newP = tasks.find((i) => {return i.id == task.updateParentId});
		if(p){
			t = p.child.splice(idx, 1);
		}else{
			t = tasks.splice(idx, 1);
		}
		t = t[0];
		t.parentId = task.updateParentId;

		//sync to index
		var taskIndex = currentIndex.find((i) => {return i.id == task.id})
		taskIndex.parentId = t.parentId;
		Onion.save('currentTaskIndex', currentIndex)

		newP.child = newP.child || [];
		newP.child.unshift(t);
		Onion.sortTasksByStatus(newP.child, 'child');
	}
}

Onion.deleteTask = function(tasks, task){
	if(task.parentId){
		var p = tasks.find((i) => {return i.id == task.parentId});
		let i = p.child.findIndex((i) => {return i.id == task.id})
		if( i >= 0 ){
			p.child.splice(i, 1);  
		}
	}else{
		let i = tasks.findIndex((i) => {return i.id == task.id})
		if( i >= 0 ){
			tasks.splice(i, 1);  
		}
	}
}

Onion.sortTasksByStatus = function(tasks, child){
	let n = child ? 1 : -1;
	tasks.sort((a, b) => {
		let va = a.finish ? 0 : n;
		let vb = b.finish ? 0 : n;
		return va - vb;
	})
}

Onion.clearCurrentIndex = function(tasks, currentIndex){
	let l = currentIndex.length;
	currentIndex = currentIndex.filter((i) => {
		let t = Onion.getTask(tasks, i.id, i.parentId)
		return !t.finish
	})

	if(l != currentIndex.length){
		Onion.save('currentTaskIndex', currentIndex)
	}
	return currentIndex;
}

export default Onion;