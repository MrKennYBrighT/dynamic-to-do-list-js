function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create task list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // **Fix: Add a class to the task item**
    listItem.classList.add("task-item");

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn"); // **Fix: Use classList.add for button styling**

    // Add event listener to remove task
    removeButton.onclick = function () {
        taskList.removeChild(listItem);
    };

    // Append elements
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = "";
}
