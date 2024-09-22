"use client"
import {useState} from "react"
import { TodoObject } from "./component/todo";
import {v4 as uuid} from "uuid"

const Home: React.FC = () => {
  const [todo , setTodo] = useState<string>("");
  const [todos , setTodos] = useState<TodoObject[]>([]);

  const addTodo = () =>{
setTodos([{id: uuid(), vlaue: todo, done: false},...todos])
setTodo("");
  }
const markTodoDone = (id: string) => {
setTodos(todos.map(todo =>todo.id === id ? {...todo, done: !todo.done }: todo))
}
  return (
    <>
    <div className="body bg-slate-50">
      <header>
    <h1 className=" h1 text-3xl p-4 bg-slate-950">Add Your Todos</h1>
      </header>
     
      <main className=" main p-4">
        <div className="content">

        <input 
        type="text"
        placeholder="Enter a new todo"
        className="p-2 rounded mr-5 text-slate-900"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
         />
         <button
         className="btn p-2 rounded"
         onClick={()=> addTodo()}
         >Add Todo</button>
        </div>
         <ul className="mt-5">
         {
          todos.map(todo =>( 
          <li
            key={todo.id} 
          onClick={()=> markTodoDone(todo.id)}
           className= {`text-3xl ml-5 cursor-pointer ${todo.done ? "line-through" : "no-underline"}`} >
            {todo.vlaue}
            </li>

           ))
        }
         </ul>
      </main>
    </div>
    </>
  );
}
export default Home
