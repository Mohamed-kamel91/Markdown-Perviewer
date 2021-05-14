import React, {useContext} from "react"
import TabBar from "./TabBar"
import Toggler from "../Toggler"
import {Context} from "../context"

// Importing "marked" Library
const renderer = new marked.Renderer();

function Previewer({previewerTheme}) {
  const {editorText} = useContext(Context)
  const {mdThemeBg, mdThemeFont, mdSbt} = previewerTheme

  return (
    <Toggler>
      {({isMaximized, toggleMax}) => {
        const previewerMaximized = isMaximized ? "md-box-max" : "md-box-min"
        const previewerMargin = isMaximized ? "md-box-right-max" : "md-box-right-min"
        
        return (
          <div className={`md-box ${previewerMargin} md-box-bottom ${mdThemeBg} ${previewerMaximized}`}>
            <div className="md-box-previewer">
              <TabBar name="previewer" isMaximized={isMaximized} toggleMax={toggleMax}/> 
              <div dangerouslySetInnerHTML={{
                   __html: marked(editorText, { renderer: renderer })
                   }}
                   className={`previewer previewer-${mdSbt} ${mdThemeFont} `}
              />
            </div>
          </div>
        )
      }}
    </Toggler>
  )
}

export default Previewer