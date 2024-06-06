import React, {useState} from 'react'

export default function Counter() {
  const [count, setState] = useState(0);
  return (
    <div>
        <h1>Your number is {count}</h1>
         <button onClick={() => setState(count+1)}>+</button>
         <button onClick={() => (count>0 && setState(count-1))}>-</button>

         <button onClick={() => setState(0)}>Reset</button>

         <p>{count>0 && 'This is Greater then 0!'}</p>
    </div>
  )
}
