import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Square(){

let [value, setValue] =  useState(null);
function handleClick(){
  setValue("X")
}
return (
<button className="square" onClick={handleClick}>{value}</button>



)

}
function Board() {
  const [count, setCount] = useState(0)

  return (
    <><div className='board-row'>
      <Square />
        <Square/>
        <Square/>
    </div>
   <div className='board-row'>
   <Square />
        <Square/>
        <Square/>
    </div>
    <div className='board-row'>
    <Square />
        <Square/>
        <Square/>
    </div>
    </>
  )
}

export default Board
