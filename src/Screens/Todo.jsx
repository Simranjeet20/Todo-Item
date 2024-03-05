import React from 'react'
import style from "./CSS Modules/TodoCSS.module.css"

export default function Todo(props) {
  return (
    <>
       <div className={` mt-4 ${style.m}`}>
            <h2 className={`${style.f}`}>
                TO-DO LIST
            </h2>
        </div>
        {props.todo.length==0 ?(
            <div class="alert alert-warning text-center" role="alert">
              List is Empty
            </div>):(
             <table class="table table-hover">
                 <thead class="table-dark">
                  <tr>
                    <th scope="col">S.NO</th>
                    <th scope="col">Title</th>
                    <th scope="col">Desc</th>
                    <th scope="col">Remark</th>
                  </tr>
                  </thead>
             <tbody>
              { 
             props.todo.map((value,index)=>{
                 return(
                     <tr>
                 <th>{index + 1}</th>
                 <td>{value.title}</td>
                 <td>{value.desc}</td>
                 <td>{value.remark}</td>
               </tr>
                 );
              })
              }
             </tbody>
        </table>
      )}
    </>
 
  )
}
