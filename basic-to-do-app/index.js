
  document.querySelector("button").addEventListener("click", addToDo);
  

  function addToDo() {
    const input = document.querySelector("input").value.trim();
    if (input === "") return;
    const newDiv = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = input;
    span.addEventListener('click',()=>{
      span.classList.toggle('completed')
    })

    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.addEventListener("click", () => {
      newDiv.remove();
    });

    newDiv.appendChild(span);
    newDiv.appendChild(delButton);

    document.getElementById("todolist").appendChild(newDiv);
    input.value=""
  }

