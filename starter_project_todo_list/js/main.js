//ToDo List

//global array

var taskList = [];

// function addItem

function addItem(){
	var task = document.getElementById("todoInput").value;
	var ul = document.getElementById("myUl");
		//alert(task);
	if(task.trim().length === 0){
		return false
	} //end of if
	else {

	if(taskList.length < 5){
		taskList.push(task);
		//alert(taskList);
		var li = document.createElement("li");
		var text = document.createTextNode(task);
		li.appendChild(text);
		ul.appendChild(li);
		//alert(taskList);
		
		//Checkmark
		var checkMark = document.createElement("button");
		checkMark.innerHTML = "&check;";
		checkMark.className = "listItemButton";
		checkMark.setAttribute("onclick", "checkMe(this)");
		li.appendChild(checkMark);

		//Crossmark
		var crossMark = document.createElement("button");
		crossMark.innerHTML = "&#x2715";
		crossMark.className = "listItemButton";
		crossMark.setAttribute("onclick", "removeMe(this)");
		li.appendChild(crossMark);

		ul.appendChild(li);
		reset();
	} //end of if task list
  } //end of else
} //end function

// function reset
function reset (){
	document.getElementById("todoInput").value = "";
} // end of function reset

// function checkMe(item)
function checkMe(item) {
	//alert(item);	
	var liTag = item.parentElement;
	//alert(item);

	//line through WORKS
	liTag.style.textDecoration = (liTag.style.textDecoration === "line-through") ? "none" : "line-through";
} //end of function checkMe(item)

// function removeMe(item)
function removeMe(item) {
	//alert(item);

	var liTag = item.parentElement;
	var ulTag = liTag.parentElement;
	ulTag.removeChild(liTag);
	//alert(taskList);
	taskList.pop();
	//alert(taskList);
} // end of removeMe function


//function enterKey
function enterKey(){
	var input = document.getElementById("todoInput");
	input.onkeyup = function(key) {
		if(key.keyCode === 13){
			addItem();
		} //end of if keyCode Enter key 13

	} // end of onkeyup

} // end of function enterKey
enterKey();

// clearList function
function clearList(){
	var ul = document.getElementById("myUl");
	ul.innerHTML = "";
	//alert(taskList.length);
	taskList.splice(0, taskList.length);
	//alert(taskList);

} // end of clearList function

button

















//END OF TODO LIST PROJECT







