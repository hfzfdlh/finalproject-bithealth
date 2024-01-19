function displayTodo(){
    const todos = JSON.parse(localStorage.getItem('todos'))

    let list = ''

    if(todos){
        todos.forEach(el=> {
            list += `
            <tr>
                <td class="col-1">
                <input type="checkbox" name="" id="${el.id}" ${el.checked ? 'checked' : ''} onchange="setComplete(this.checked, this.id)">
                </td>
                <td class="col-10">
                <p id="p-${el.id}" style="text-decoration:${el.lineStyle}" >${el.name}</p>
                </td>
                <td class="col-1">
                <button type="button" class="btn btn-danger" id="${el.id}" onclick="deleteTodo(this.id)">Delete</button>
                </td>
            </tr>
            `
            
        });
    }

    document.getElementById('list-todo').innerHTML = list
}


function submitTodo() {
    const todo = document.getElementById('add-todo').value

    let todos = JSON.parse(localStorage.getItem('todos'))

    if (todos){
        todos.push({
            id: todos[todos.length-1].id + 1,
            name: todo,
            checked: false,
            lineStyle:"none"
        })
    } else{
        todos = [{
            id: 0,
            name: todo,
            checked: false,
            lineStyle:"none"
        }]
    }
    localStorage.setItem('todos', JSON.stringify(todos))
    document.getElementById('add-todo').value = ''
    displayTodo()
}



function setComplete(checked,id){
    let todos = JSON.parse(localStorage.getItem('todos'))

    let newTodos = []
    todos.forEach(el => {
        if (el.id === Number(id) && el.checked == false){
            el.checked = true
            el.lineStyle = "line-through"
        } else if(el.id === Number(id) && el.checked == true){
            el.checked = false
            el.lineStyle = "none"
    
        }
        newTodos.push(el)
        
    });

    localStorage.setItem('todos', JSON.stringify(newTodos))

    displayTodo()
}

function deleteTodo(id){
    let todos = JSON.parse(localStorage.getItem('todos'))

    todos = todos.filter(el=>el.id != Number(id))

    if (todos.length){
        localStorage.setItem('todos', JSON.stringify(todos))
    } else{
        localStorage.removeItem('todos')
    }

    displayTodo()
}