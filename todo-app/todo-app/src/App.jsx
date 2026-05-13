
import {useState, useEffect} from 'react'

function DisplayToDos({
  todo,
  toggletodo,
  deletetodo
}) {
  return (
    
    <div className="bg-amber-100/60 p-4 rounded-xl mt-4 shadow-md">

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <button
            onClick={toggletodo}
            className={`
              w-5 h-5 rounded-full border-2
              flex items-center justify-center
              transition
              ${
                todo.done
                  ? "bg-amber-900 border-amber-900 text-white"
                  : "border-gray-400"
              }
            `}
          >
            {todo.done ? "✓" : ""}
          </button>

          <div>
            <h3
              className="text-xl font-semibold"
              style={{
                textDecoration: todo.done
                  ? "line-through"
                  : "none"
              }}
            >
              {todo.title}
            </h3>

            <p
              className="text-gray-600 mt-1"
              style={{
                textDecoration: todo.done
                  ? "line-through"
                  : "none"
              }}
            >
              {todo.description}
            </p>
          </div>
        </div>

        <button
          className="text-amber-800 hover:text-amber-950"
          onClick={deletetodo}
        >
          ✕
        </button>

      </div>
    </div>
  );
}

function App(){


  const todoKey = "reactToDo"
  const [todo,setTodo] = useState(() =>{
    const rawtodos = localStorage.getItem(todoKey);
    if(!rawtodos) return [];
        return JSON.parse(rawtodos);
  });


  useEffect(() => {
  localStorage.setItem(todoKey, JSON.stringify(todo));
}, [todo]); // only fires when todo array changes

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");


function addTodo(){
  if (!title.trim()) return;
  setTodo([...todo,{title,description,done: false}])
  setTitle("")
  setDescription("")
}

function deleteTodo(index){
  const updated = todo.filter((__,i) => i !== index);
  setTodo(updated);
}

function ToggleTodo(index){
  const updatedTodo = todo.map((todo,i) => i === index
  ?  {...todo, done: !todo.done}
  : todo
);

setTodo(updatedTodo);
}


return(
  <>
  <div className='min-h-screen bg-amber-50 flex justify-center items-center'>
  <div className="bg-white p-6 rounded-2xl max-w-md">
    <h1 className="text-2xl font-bold text-center mb-4 text-amber-900">
          Todo App
        </h1>
    <input className='w-full border p-3 rounded-lg mb-3 focus:outline-none focus:border-2 focus:border-amber-800'
    placeholder="Enter title"
    value = {title}
    onChange = {(e) => setTitle(e.target.value)}
    />
    <input className='w-full border p-3 rounded-lg mb-3 focus:outline-none focus:border-2 focus:border-amber-800'
    value = {description}
     placeholder="Enter description"
    onChange = {(e) => setDescription(e.target.value)}/>
    <br/>
   
    <button 
    className="w-full bg-amber-900 hover:bg-amber-800 text-white py-2 rounded-lg"onClick = {addTodo}>
      Add Task
    </button>
 <p className="text-sm text-gray-500 mt-4 mb-2">
  {todo.length} tasks · {todo.filter(t => t.done).length} done
</p>
{todo.map((item,index) => (
  <DisplayToDos
  key = {index}
  todo = {item}
  toggletodo = {() => ToggleTodo(index)}
  deletetodo = {() => deleteTodo(index)}
  />
  
))}

  </div>
  </div>
  </>
);
}

export default App;