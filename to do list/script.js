const tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    const completedTasks = document.getElementById('completedTasks');
    taskList.innerHTML = '';
    completedTasks.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add('completed');
            completedTasks.appendChild(li);
        } else {
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Completed';
            completeButton.onclick = () => markAsCompleted(index);
            li.appendChild(completeButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteTask(index);
            li.appendChild(deleteButton);

            taskList.appendChild(li);
        }
    });
}

function markAsCompleted(index) {
    tasks[index].completed = true;
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

displayTasks();
