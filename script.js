document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        // Retrieve and trim user input
        const taskText = taskInput.value.trim();

        // Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create task list item
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        listItem.classList.add("task-item"); // Ensures styling is applied correctly

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Assign event listener for removing task
        removeButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        // Append elements
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input field after adding task
        taskInput.value = "";
    }

    // Attach event listener to "Add Task" button
    addButton.addEventListener("click", addTask);

    // Enable task addition via Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
