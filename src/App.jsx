import { useState } from 'react'
import './App.css'

function App() {
  const [addedCircles, setAddedCircles] = useState([]);
  const [removedCircles, setRemovedCircles] = useState([]);


  const circleMaker = (e)=> {
    const {pageY, pageX} = e;

    //Add the existing circle plus the new circle
    setAddedCircles([...addedCircles, {
      y: pageY,
      x: pageX
    }])
  }
  
  const undoHandler = ()=> {
    //Add the popped addedCircle to the removedCircles array
    setRemovedCircles([...removedCircles, addedCircles.pop()]);
  }

  const redoHandler = ()=> {
    //Add the popped circle from the removedCircles to the addedCircles array
    if(removedCircles.length < 1) return
    setAddedCircles([...addedCircles, removedCircles.pop()])
  }

  return (
    <>
    <button onClick={undoHandler} disabled={addedCircles.length > 0 ? false : true}>Undo</button>
    <button onClick={redoHandler} disabled={removedCircles.length > 0 ? false : true}>Redo</button>
    <div className="app" onClick={(e)=>circleMaker(e)}>
      {addedCircles && addedCircles.map((circle, i) => <div key={i} className="circle" style={{top: `${circle.y - 8}px`, left: `${circle.x - 8}px`}}></div>)}
    </div>
    </>
  )
}

export default App
