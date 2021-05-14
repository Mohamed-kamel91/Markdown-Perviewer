import React, {useRef, useEffect, useContext} from "react"
import TabBar from "./TabBar"
import Toggler from "../Toggler"
import {Context} from "../context"

function Editor({editorTheme}) {
  const {editorText, handleChange} = useContext(Context)
  const editorRef = useRef(null)
  
  const {mdThemeBg, mdThemeFont, mdSbt} = editorTheme

  // Focus on Editor Textarea on Page Load
  useEffect(() =>{
    editorRef.current.focus()
  }, [])
  
  return (
    <Toggler>
      {({isMaximized, toggleMax}) => {
        const editorMaximized = isMaximized ? "md-box-max" : "md-box-min"
        const editorMargin = isMaximized ? "md-box-left-max" : "md-box-left-min" 
        return (
          <div className={`md-box ${editorMargin} md-box-top ${mdThemeBg} ${editorMaximized}`}> 
            <div className="md-box-editor">
              <TabBar name="editor" isMaximized={isMaximized} toggleMax={toggleMax}/>
              <textarea ref={editorRef} 
                        className={`editor ${mdThemeFont} editor-${mdSbt}`} 
                        value={editorText} 
                        name="editor"
                        onChange={handleChange}>
              </textarea>
            </div>
          </div>
        )
      }}
    </Toggler>
  )
}

export default Editor