import React, {useState} from "react"
const Context = React.createContext()

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
`;

function ContextProvider(props) {
  const [theme, setTheme] = useState("dark")
  const [editorText, setEditorText] = useState(placeholder)

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  function handleChange(e) {
    const {value} = e.target
    setEditorText(value)
  }

  return (
    <Context.Provider value={{theme, toggleTheme, editorText, handleChange}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}