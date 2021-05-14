import React, {useState, useContext} from "react"
import Icon from "./Icon"
import {Context} from "../context"

function TabBar({name, isMaximized, toggleMax}) {
  const {theme} = useContext(Context)
  
  // Styling Logic
  const tabNameThemebg = theme === "dark" ? "tab-bar-name-dark-bg" : "tab-bar-name-light-bg"

  return (
    <div className="tab-bar-wrapper">
      <div className={`tab-bar-name-box ${tabNameThemebg}`}>
        <span className="tab-bar-name">{name}</span>
      </div>
      <div className="tab-bar-icons-box">
        <Icon toggleMax={toggleMax} isMax={isMaximized} iconName={isMaximized ? "minimize" : "maximize"} />
      </div>
    </div>
  )
}

export default TabBar
