import React from 'react'
import Todo from './Screens/Todo'
import Addtodo from './Screens/Addtodo'


export default function App() {
  const item = [
    {
    
    title:'Shopping',
    desc:"Go to Alpha 1 to buy laptop",
    remark:"HP 8934"
    },
    {
        
    title:'Food',
    desc:"Buy food online",
    remark:"Pizza, Fries"
    },
    {

    title:'Drinks',
    desc:"Onilne order",
    remark:"Diet Coke "
    }
]
  return (
    <div>
      <Addtodo />
      <Todo todo={item} />

    </div>
  )
}
