import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { Input } from 'postcss'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  const [checkbox, setcheckbox] = useState(true);

  

  useEffect(() => {
    let todo = localStorage.getItem("Todos");
    if(todo){
      setTodos(JSON.parse(todo));
    }
  
  }, [])

  const SaveToL =()=>{
    localStorage.setItem("Todos",JSON.stringify(Todos))
  }

  const togglebutton=()=>{
    setcheckbox(!checkbox);
  }

  const handleEdit=(e,id)=>{
    let t = Todos.filter((item)=>{
      return id === item.id
    })
    setTodo(t[0].Todo);
    let newTodos = Todos.filter((item)=>{
      return item.id!== id
     })
     
      setTodos(newTodos);
      SaveToL();
  

  }

 const handleChange =(e)=>{
  setTodo(e.target.value)

 }
 const handleAdd = ()=>{
  setTodos([...Todos,{id: uuidv4(), Todo,isCompleted:false}])
  SaveToL();
 }

 const handleCheckbox= (e) => {
  let id=e.target.name
  let index = Todos.findIndex((item)=>{
    return item.id === id
  })
  let newTodos = [...Todos];
  newTodos[index].isCompleted = !Todos[index].isCompleted;
  setTodos(newTodos);
  SaveToL();
 }
 const handleDelete=(e,id)=>{
 if(confirm("Are you sure you want to delete this To-do?")) {
  let newTodos = Todos.filter((item)=>{
    return item.id!== id
   })
   
    setTodos(newTodos);

 }

 else{
  setTodos(newTodos);

 }
 SaveToL();


 }
 

  return (
    <>
      <Navbar />
     
      <div className="container mx-auto ">
        <div className="Your-Todos flex flex-col  my-14 mx-auto gap-5 bg-violet-100 rounded-md p-9 min-h-[70vh]">
          <h1 className="mx-auto font-bold text-2xl">R-TASK:Helps to manage your task easily</h1>
        
         <div className="Add font-bold bg-violet-200 p-2 rounded-md">
            <p className="font-xl">Add Todos</p>
             <input onChange={handleChange} value={Todo} type="text" className="rounded-full w-1/2" />
            <button className="bg-violet-800 text-white rounded-md p-1 mx-2" disabled={Todo.length<=3}  onClick={handleAdd}>Add</button>
       
          </div>
           
           

            <div className="Todos font-bold bg-violet-200 p-2 rounded-md">
              <input  onChange={ togglebutton } type="checkbox" checked={checkbox} />List Completed
            <p>Your Todos</p>
            {Todos.length === 0 && <div className="font-normal">No Todos to display</div>}
            {Todos.map(item=>{
              return(
                (checkbox || !item.isCompleted)  && 
                <>
                <div key={item.id} className="my-todos flex justify-between my-4">
                  <input onChange={handleCheckbox} name={item.id} type="checkbox" value={item.isCompleted}/>
                  <p className={item.isCompleted?"line-through":""} >{item.Todo}</p>
                  <div className="buttons flex gap-3">
                  <button onClick={(e)=>{handleEdit(e,item.id)}}className="bg-violet-800 text-white rounded-md p-1"><FaEdit /></button>
                  <button onClick={(e)=>{handleDelete(e,item.id)}} className="bg-violet-800 text-white rounded-md p-1"><MdDelete /></button>
                  </div>
                  
                  


                </div>
                 
                </>
           
              )
          })}
          </div>
        

        </div>



        </div>
        </>
        );
        }
     
     
        export default App;
