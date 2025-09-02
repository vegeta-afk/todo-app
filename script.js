function createtodoitem() {
  //get input value from the user
  let vlinput = document.querySelector(".input_box ").value;

  console.log(vlinput);

  if (vlinput === "") {
    //creating element to store to-do
    alert("pls write smh");
  } else {
    let todoitem = document.createElement("div");
    todoitem.innerHTML = `<span>${vlinput}</span> <i class="fa-solid fa-trash"></i>`;

    //adding element into the to items container

    document.querySelector(".todo-item").appendChild(todoitem);
  }
}

