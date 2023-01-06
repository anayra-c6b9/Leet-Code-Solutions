// using minHeap, solving the non-primtive
// SJF problem
class MinHeap{
	constructor(list){
		this.list = list;
		this.flag = 0;
		for(var i = 0; i < this.list.length; i++){this.list[i].push(i);}
		for(var i = ~~((this.list.length - 2)/2); i >= 0; i--){this.heapify(i);}
		this.time = this.list[0][0];
		console.log(this.list);
	}
	heapify(parent){
		var left = 2*parent+1;
		var right = 2*parent+2;
		if(!this.list[left])
			return;
		var child = this.getChild(left, right);

		if(this.compare(child, parent)){
			this.swap(child, parent);
			this.heapify(child);
		}
	}
	compare(child, parent){
		if(this.flag == 0){
			return this.initialCompare(child, parent);
		} else {
			return this.finalCompare(child, parent);
		}
	}

	getChild(left, right){
		return (this.flag == 0) ?
			this.initialChild(left, right) :
			this.finalChild(left, right);
	}

	initialChild(left, right){
		return (!this.list[right]) ?
		left :
		(this.list[right][0] < this.list[left][0]) ?
		right :
		(this.list[right][0] == this.list[left][0]
			&& this.list[right][1] < this.list[left][1]) ?
			right :
			left ;
	}

	finalChild(left, right){
		if (!this.list[right]){
			return left;
		} else if(this.list[left][0] <= this.time
			&& this.list[right][0] <= this.time){
				if(this.list[right][1] < this.list[left][1]){
					return right;
				} else if(this.list[right][1] == this.list[left][1]){
					if(this.list[right][2] < this.list[left][2]){
						return right;
					} else {
						return left;
					}
				} else {
					return left;
				}
		} else if(this.list[left][0] > this.time){
			return right;
		} else {
			return left;
		}
	}

	initialCompare(child, parent){
		if(this.list[child][0] < this.list[parent][0]){
			return true;
		} else if(this.list[child][0] == this.list[parent][0]){
			if(this.list[child][1] < this.list[parent][1]){
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	finalCompare(child, parent){

		if(this.list[child][0] <= this.time && this.list[parent][0] <= this.time){
			if(this.list[child][1] < this.list[parent][1]){
				return true;
			} else if(this.list[child][1] == this.list[parent][1]
				&& this.list[child][2] < this.list[parent][2]){
				return true;
			} else {
				return false;
			}
		} else if(this.list[parent][0] > this.time){
			return true;
		} else {
			return false;
		}

	}

	dequeue(){
		if(this.list.length == 1){ return this.list.pop();}
		this.swap(0, this.list.length-1);
		var popped = this.list.pop();
		this.time += popped[1];
		
		for(var i = ~~((this.list.length - 2)/2); i >= 0; i--){this.heapify(i);}
		console.log(`\nafter heapify: \n ${this.list.join(" ")}\nCurrent time: ${this.time}`);
		return popped;
	}

	swap(pos1, pos2){
		[this.list[pos1], this.list[pos2]] = [this.list[pos2], this.list[pos1]];
	}
}

var getOrder = function(tasks){
	var myHeap = new MinHeap(tasks);
	var count = 0;
	var order = [];
	var popped ;
	myHeap.flag = 1;
	while(count < tasks.length){
		popped = myHeap.dequeue();
		console.log(`${popped}`);
		order.push(popped[2]);
	}
	console.log(order);
};

getOrder([[19,13],[16,9],[21,10],[32,25],[37,4],[49,24],[2,15],[38,41],[37,34],[33,6],[45,4],[18,18],[46,39],[12,24]]);

