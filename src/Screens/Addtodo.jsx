import React, { useState } from 'react'
import style from "./CSS Modules/TodoCSS.module.css"

export default function Addtodo(props) {
    const [title, settitle]=useState([])
    const[desc, setdesc]= useState([])
    const [remark, setremark]= useState([])

    const tododata={
       title:title,
       desc:desc,
       remark:remark

    }
  return (
    <div className={`${style.m}`}>
        <div>
        <div className="card mt-4 text-bg-light">
                <div className='card-body'>
            <h2 className={`${style.f}`} > Add Todo</h2>
            
                <div className='row'>
                <div className='col-3'>
                    <input  type='text' className="form-control" id="exampleInputPassword" placeholder='Title' 
                    value={title}
                    onChange={(e)=>{
                        settitle(e.target.value)
                        

                    }}>
                        
                    </input>
                    
                </div>
                <div className='col-6'>
                    <input  type='text' className="form-control" id="exampleInputPassword" placeholder='Desc'
                    value={desc}
                    onChange={(e)=>{
                        setdesc(e.target.value)
                    }}>
                        
                    </input>
                    
                </div>
                <div className='col-3'>
                    <input  type='text' className="form-control" id="exampleInputPassword" placeholder='Remark'
                    value={remark}
                    onChange={(e)=>{
                        setremark(e.target.value)
                    }}>
                        
                    </input>
                </div>
             </div>
        
               
          
            <button className="btn btn-outline-success mt-4 px-5 "
             onClick={(event)=>{
             props.f(tododata);
             settitle('');
             setdesc('');
             setremark('')}}>
                Add Todo
            </button>
            </div>
            </div>
            
        </div>
    </div>
  )
}
