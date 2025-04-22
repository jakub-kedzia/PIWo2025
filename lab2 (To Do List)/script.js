"use strict"

var activeList = '';
var clickedList;
var taskItem;
var taskInput;
var isActive;
var selectedList;
var deleteButton;
var lastRemoved;
var currentDate;
var formattedDate;
var day, month, year;
var task;
var chosenTask;
var dateDiv;

taskInput = document.getElementById('taskInput');

document.getElementById('undoButton').disabled = true;


taskInput.addEventListener("keypress", function(event){
	if (event.key === "Enter"){
		event.preventDefault();
		document.getElementById("inputButton").click();
	}
})

function addTask(){

	if (activeList !== ''){
		if (taskInput.value !== ''){

			taskItem = document.createElement("li");
			taskItem.dataset.listId = activeList;

			task = document.createElement('div')
			deleteButton = document.createElement('button');
			dateDiv = document.createElement('div');

            deleteButton.classList.add('button');
            taskItem.classList.add('task');
            
			deleteButton.onclick = function(){
				chosenTask = taskItem;
				document.getElementById('question').textContent = "Czy usunąć: " + task.textContent;
				document.getElementById('deleteModal').style.display = 'flex';
			}

			taskItem.addEventListener('dblclick', function(){
				task.classList.toggle('done');

				currentDate = new Date();
				
				day = currentDate.getDate();
				month = currentDate.getMonth() + 1;
				year = currentDate.getFullYear();

				formattedDate = day.toString().padStart(2, '0') + '-' + month.toString().padStart(2, '0') + '-' + year;

				if (dateDiv.textContent === '') {
					dateDiv.textContent = formattedDate;
				} else {
					dateDiv.textContent = '';
				}
			})

			deleteButton.textContent = '❌';
			task.textContent = taskInput.value;
			selectedList = document.getElementById(activeList);
			taskItem.appendChild(task);
			taskItem.appendChild(dateDiv);
			taskItem.appendChild(deleteButton);
			selectedList.appendChild(taskItem);
			taskInput.value = '';
		} else {
			alert('Proszę wprowadzić zadanie.');
		}
	} else {
		alert('Proszę wybrać listę');
	}
}

function toggleList(list){
	clickedList = document.getElementById(list);
	isActive = clickedList.classList.contains('active');

	if (isActive) {
		activeList = '';
	} else {

		if (activeList !== ''){
			document.getElementById(activeList).classList.toggle('active');
		}

		activeList = list;
	}

	clickedList.classList.toggle('active');
}

function undoReturn(){
	selectedList = document.getElementById(lastRemoved.dataset.listId);
	selectedList.appendChild(lastRemoved);
	lastRemoved = null;
	document.getElementById('undoButton').disabled = true;
}

document.getElementById('buttonYes').addEventListener('click', function(){
	lastRemoved = chosenTask;
	chosenTask.remove();
	document.getElementById('undoButton').disabled = false;
	document.getElementById('deleteModal').style.display = 'none'
	chosenTask = null;
})

document.getElementById('buttonNo').addEventListener('click', function(){
	document.getElementById('deleteModal').style.display = 'none';
	chosenTask = null;
})


