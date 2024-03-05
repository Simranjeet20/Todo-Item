import React from 'react'
import style from "./CSS Modules/TodoCSS.module.css"

export default function Addtodo() {
  return (
    <div className={`${style.m}`}>
        <div>
        <div className="card mt-4 text-bg-light">
                <div className='card-body'>
            <h2 className={`${style.f}`} > Add Todo</h2>
            
                <div className='row'>
                <div className='col-3'>
                    <input  type='text' class="form-control" id="exampleInputPassword" placeholder='Title'>
                        
                    </input>
                    
                </div>
                <div className='col-6'>
                    <input  type='text' class="form-control" id="exampleInputPassword" placeholder='Desc'>
                        
                    </input>
                    
                </div>
                <div className='col-3'>
                    <input  type='text' class="form-control" id="exampleInputPassword" placeholder='Remark'>
                        
                    </input>
                </div>
             </div>
        
               
          
            <button class="btn btn-outline-success mt-4 px-5 ">
                Add Todo
            </button>
            </div>
            </div>
            
        </div>
    </div>
  )
}
