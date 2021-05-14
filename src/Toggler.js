import React, {useState} from "react"

function Toggler(props) { 
  const [isMaximized, setIsMaximized] = useState(false)
  
  function toggleMax() {
    setIsMaximized(!isMaximized)
  }

  return (
    <>
      {props.children({isMaximized, toggleMax})}
    </> 
  )
}

export default Toggler