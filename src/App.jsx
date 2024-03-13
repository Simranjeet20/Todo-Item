import React, { useState } from 'react'
import Todo from './Screens/Todo'
import Addtodo from './Screens/Addtodo'


export default function App() {
  const [todoitem,addtodo]= useState([])
  const Childcall=(e)=>{
    // console.log(
    //   window.alert("hello")
    // )
    // window.alert("hello")
    console.log(e.title)
    console.log(e.dsec)
    console.log(e.remark)
    addtodo([...todoitem, e])
  }
  

//   const item = [
//     {
    
//     title:'Shopping',
//     desc:"Go to Alpha 1 to buy laptop",
//     remark:"HP 8934"
//     },
//     {
        
//     title:'Food',
//     desc:"Buy food online",
//     remark:"Pizza, Fries"
//     },
//     {

//     title:'Drinks',
//     desc:"Onilne order",
//     remark:"Diet Coke "
//     }
// ]

  return (
    <div>
      <Addtodo f={Childcall}/>
      <Todo todo={todoitem} />

    </div>
  )
}
