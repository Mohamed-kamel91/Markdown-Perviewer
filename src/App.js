import React, {useState, useContext, useEffect} from "react"
import ThemeToggle from "./components/ThemeToggle"
import Title from "./components/Title"
import Editor from "./components/Editor"
import Previewer from "./components/Previewer"
import {Context} from "./context"

function App() {
  const {theme} = useContext(Context)

  // Styling Logic
  const mdTheme = {
    mdThemeBg: theme === "dark" ? "md-dark-bg" : "md-light-bg",
    mdThemeFont: theme === "dark" ? "light-font" : "dark-font",
    mdSbt: theme === "dark" ? "dark-sbt" : "light-sbt"
  }

  // Random Bg Color on Page Load
  function randomBgColor() {
    const bgColors = [
      "linear-gradient(to right, #4b134f, #c94b4b)",
      "linear-gradient(to right, #fdc830, #f37335)", 
      "linear-gradient(to right, #da4453, #89216b)",
      "linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)",
      "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
      "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)",
      "linear-gradient(to right, #159957, #155799)",
      "linear-gradient(to right, #f2994a, #f2c94c)"
    ]
    
    return bgColors[Math.floor(Math.random() * bgColors.length)]
  }
 
  // change the page background color on page load
  useEffect(() => {
    document.body.style.background = randomBgColor();
  }, [])

  return (
    <div className="wrapper">
      <ThemeToggle />
      <Title />
      <div className="md-wrapper-flex">
        <Editor editorTheme={mdTheme} />
        <Previewer previewerTheme={mdTheme} />
      </div>
    </div>
  )
}

export default App


// import React, {useState, useContext, useEffect} from "react"
// import ThemeToggle from "./components/ThemeToggle"
// import Title from "./components/Title"
// import Editor from "./components/Editor"
// import Previewer from "./components/Previewer"
// import {Context} from "./context"

// function App() {
//   const [editorText, setEditorText] = useState("")
//   const {theme} = useContext(Context)

//   // const bgColors = 

//   // Styling Logic
//   const mdTheme = {
//     mdThemeBg: theme === "dark" ? "md-dark-bg" : "md-light-bg",
//     mdThemeFont: theme === "dark" ? "light-font" : "dark-font",
//     mdSbt: theme === "dark" ? "dark-sbt" : "light-sbt"
//   }

//   // Editor Text Event Handler
//   function handleChange(e) {
//     setEditorText(e.target.value)
//   }

//   useEffect(() => {
    
//   }, [])

//   return (
//     <div className="wrapper">
//       <ThemeToggle />
//       <Title />
//       <div className="md-wrapper-flex">
//         <Editor text={{editorText, handleChange}} editorTheme={mdTheme} />
//         <Previewer text={editorText} previewerTheme={mdTheme} />
//       </div>
//     </div>
//   )
// }

// export default App