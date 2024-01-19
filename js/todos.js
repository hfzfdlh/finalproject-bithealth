function displayTodo(state){
    const todos = JSON.parse(localStorage.getItem('todos'))

    let list = ''
    console.log(todos)
    if(todos){
        if (state == "all"){
            todos.forEach(el=> {
                list += `
                <tr>
                    <td class="col-1">
                    <input type="checkbox" name="" id="${el.id}" ${el.checked ? 'checked' : ''} onchange="setComplete(this.checked, this.id)">
                    </td>
                    <td class="col-8">
                    <p id="p-${el.id}" style="text-decoration:${el.lineStyle}" >${el.name}</p>
                    </td>
                    <td class="col-2">
                    <p>${el.tag}</p>
                    </td>
                    <td class="col-1">
                    <button type="button" class="btn btn-danger" id="${el.id}" onclick="deleteTodo(this.id)">Delete</button>
                    </td>
                </tr>
                `
            });
        } else{
            let filterList = todos.filter(el => el.tag == state)
            console.log(filterList)
            filterList.forEach(el=> {
                list += `
                <tr>
                    <td class="col-1">
                    <input type="checkbox" name="" id="${el.id}" ${el.checked ? 'checked' : ''} onchange="setComplete(this.checked, this.id)">
                    </td>
                    <td class="col-8">
                    <p id="p-${el.id}" style="text-decoration:${el.lineStyle}" >${el.name}</p>
                    </td>
                    <td class="col-2">
                    <p>${el.tag}</p>
                    </td>
                    <td class="col-1">
                    <button type="button" class="btn btn-danger" id="${el.id}" onclick="deleteTodo(this.id)">Delete</button>
                    </td>
                </tr>
                `
            });

        }
        
    }
    

    document.getElementById('list-todo').innerHTML = list
}


function submitTodo() {
    const todo = document.getElementById('add-todo').value
    const tag = document.getElementById('select-tag').value

    let todos = JSON.parse(localStorage.getItem('todos'))

    if (todos){
        todos.push({
            id: todos[todos.length-1].id + 1,
            name: todo,
            checked: false,
            lineStyle:"none",
            tag: tag
        })
    } else{
        todos = [{
            id: 0,
            name: todo,
            checked: false,
            lineStyle:"none",
            tag:tag
        }]
    }
    localStorage.setItem('todos', JSON.stringify(todos))
    document.getElementById('add-todo').value = ''
    displayTodo(localStorage.getItem('tag'))
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

    displayTodo(localStorage.getItem('tag'))
}

function deleteTodo(id){
    let todos = JSON.parse(localStorage.getItem('todos'))

    todos = todos.filter(el=>el.id != Number(id))

    if (todos.length){
        localStorage.setItem('todos', JSON.stringify(todos))
    } else{
        localStorage.removeItem('todos')
    }

    displayTodo(localStorage.getItem('tag'))
}

function setFilter(tag){
    localStorage.setItem('tag',tag)
    displayTodo(localStorage.getItem('tag'))
}