let todoList = []
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  if(todoItem && todoDate !== ''){
    todoList.push({Item : todoItem, dueDate : todoDate});
    inputElement.value = '';
    dateElement.value = '';
  }
  else{
    alert(`Input fields can't be empty`)
  }
  
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');
  let newHTML = '';
  for(let i = 0; i < todoList.length; i++){
    let {Item,dueDate} = todoList[i];

    newHTML += `
      <span class='todo'>${Item}</span>
      <span class='todo'>${dueDate}</span>
      <button class = "dlt-btn" onclick="todoList.splice(${i},1);
      displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHTML;
  
}