document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

        storedTasks.forEach(taskText => {
            addTask(taskText, false); // 'false' prevents duplicate Local Storage updates
        });
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // Trim user input if manually entered
        if (save) {
            taskText = taskInput.value.trim();
        }

        // Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create task list item
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        listItem.classList.add("task-item");

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Assign event listener for removing task
        removeButton.addEventListener("click", function () {
            taskList.removeChild(listItem);

            // Remove task from Local Storage
            const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            const updatedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        });

        // Append elements
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save task to Local Storage if manually added
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            storedTasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(storedTasks));

            // Clear input field after adding task
            taskInput.value = "";
        }
    }

    // Attach event listener to "Add Task" button
    addButton.addEventListener("click", function () {
        addTask(taskInput.value.trim(), true);
    });

    // Enable task addition via Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask(taskInput.value.trim(), true);
        }
    });

    // Invoke loadTasks function to retrieve stored tasks
    loadTasks();
});
