import React, { useState } from 'react'
// import "./Input.css";
import { addTodo, deleteTodo,removeTodo } from '../actions/index';
import { useDispatch,useSelector } from "react-redux";
const Todo = () => {
   const [inputData, setInputData] = useState('');
   const dispatch = useDispatch();
   const list = useSelector((state)=>state.todoReducers.list)
   return (
      <>

         <div className="container ">
          <div className="input">
            <div className="col-md-12 ">
               <figure >
                  <figcaption className="text-primary  mt-5 ">ADD your List Here ✌️ </figcaption>
               </figure>
               <div>
                  <input type="text" className="p-2 mb-2  input" placeholder="✍️ Add Items..." value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
                  <i className="fa fa-plus a m-5 cursor-pointer" title="add item" onClick={() => dispatch(addTodo(inputData)
                  ,setInputData(''))}></i>
               </div>
               <div>
                  {
                  list.map((elem) => {
                     return (
                           
                        <div key={elem.id}>
                           <div class="d-flex p-2 bg-primary text-dark">
                           <h3>{elem.data}</h3>
                           </div>
                              <div className="d-flex justify-content-end">
                              <i className="fas fa-trash delete-btn " title="delete item" onClick={() => dispatch(deleteTodo(elem.id)
                              )}></i>
                              </div>
                        </div>
                        )

                           
                     })
                  }
                 
               </div>
               <div>
                  <button className="btn btn-secondary  mt-2" data-sm-link-text="remove All" onClick={()=>dispatch(removeTodo())}><span>Remove List</span></button>
               </div>
            </div>
            </div>
         </div>
      </>
   )
}

export default Todo
