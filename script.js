const addButton = document.getElementById('addButton');
const userInput = document.getElementById('userInput');
const toDoList = document.getElementById('toDoList');

// Add an event listener to the add button
addButton.addEventListener('click', addTask);

function addTask() {
    // Get the user input
    let taskText = userInput.value.trim();

    // Check if the user input is not empty
    if (taskText) {
        // Create a new list item
        let li = document.createElement('li');
        li.textContent = taskText;

        // Add the list item to the to-do list
        toDoList.appendChild(li);

        // Clear the input field
        userInput.value = '';
    } else {
        alert("Please enter a task!");
    }
}
