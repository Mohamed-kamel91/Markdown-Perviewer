import React, {useContext} from "react"
import {Context} from "../context"

function Icon({iconName, isMax, toggleMax}) {
  const {theme} = useContext(Context)
  
  // Styling Logic
  const iconThemebg = theme === "dark" ? "icon-dark-bg" : "icon-light-bg"
  const ismaxed =  isMax ? <i className="fas fa-window-minimize"></i> : <i className="far fa-window-maximize"></i> 
 
  return (
      <div className={`icon ${iconThemebg}`} onClick={toggleMax}>
        {ismaxed}
        <span className="icon-name">{iconName}</span>
      </div>
  )
}

export default Icon