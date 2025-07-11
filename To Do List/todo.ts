interface Todo{
    inputBox: HTMLInputElement;
    taskList: HTMLElement;
}

const elements: Todo = {
    inputBox: document.getElementById("input-box") as HTMLInputElement,
    taskList: document.getElementById("task-list") as HTMLElement,
}

const addTask = ({inputBox, taskList}: Todo): void => {
    if (inputBox.value === ''){
        alert("Write Something");
    }
    else{
        const li: HTMLLIElement = document.createElement("li");
        li.textContent = inputBox.value;
        taskList.appendChild(li);

        const edit: HTMLSpanElement = document.createElement("span");
        edit.textContent = "\u270E";
        edit.className = "edit";
        li.appendChild(edit);

        const span: HTMLSpanElement = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

elements.taskList?.addEventListener("click", function(event: PointerEvent): void {
    const target = event.target as HTMLElement;

    if (target.tagName === "LI"){
        target.classList.toggle("checked");
    }
    else if (target.innerHTML === "\u270E"){
        const li = target.parentElement;
        const newText = prompt("Edit your task:", li?.firstChild?.textContent || "") || "";
        if (newText !== ""){
            li!.firstChild!.textContent = newText;
        }
    }
    else if (target.innerHTML === "\u00d7"){
        target.parentElement?.remove();
    }
});

document.getElementById("form")?.addEventListener("submit", function(event: SubmitEvent): void {
    event.preventDefault();
    addTask(elements);
});

