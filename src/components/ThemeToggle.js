import React, {useContext} from "react"
import {Context} from "../context"

function ThemeToggle() {
  const {theme, toggleTheme} = useContext(Context)

  // Styling Logic
  const ballPosition = theme === "dark" ? "ball-to-left" : "ball-to-right"
  const toggleBg = theme === "dark" ? "toggle-bg-dark" : "toggle-bg-light"
  
  return (
    <div className={`theme-wrapper ${toggleBg}`}>
      <div className="theme-box-flex " onClick={toggleTheme}>
        <i style={{opacity: theme === "light" ? 1 : 0}} className="fas fa-sun"></i>
        <i style={{opacity: theme === "dark" ? 1 : 0}} className="fas fa-moon"></i>
        <div className= {`toggle-ball ${ballPosition}`}  />
      </div>
	  </div>
  )
}

export default ThemeToggle
