// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <pre>
        hint:
            innerHTML


            createElement()
            appendChild()

        to persist data : use localstorage
    </pre>

    <h1>todo lsit</h1>
    <hr>
    <form onsubmit="addTodo(event)">
        <input required type="text" old-id="title" name="title">
        <button>add</button>
    </form>
    <hr>
    <ul id="todo-list">

    </ul>

    <script>

        let todos = []

        let storedTodos = localStorage.getItem("todos")

        todos = JSON.parse(storedTodos) || []


        const addTodo = event => {
            event.preventDefault() // to prevent page refresh on form submit

            // console.log(event.target)
            // console.log(event.target.title.value)
            // let value = document.getElementById("title").value
            let value = event.target.title.value
            value = value.trim()
            if (value) {
                todos.push(value)
                console.log(todos)
                convertTodosArrToList();
                /* reset the input field value */
                // document.getElementById("title").value = ""
                event.target.title.value = ""

                localStorage.setItem("todos", JSON.stringify(todos))


            } else {
                console.log("required.. field..");
            }



        }

        function convertTodosArrToList() {
            let str = ""
            /* todos = ["react","js","css"] */
            todos.forEach(title => {
                str += `<li> ${title} </li>`
            })
            // str =" <li>react</li> <li>js</li>"
            document.getElementById("todo-list").innerHTML = str
        }

        convertTodosArrToList()





    </script>

</body>

</html>