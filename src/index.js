import React from "react";
import ReactDom from "react-dom";
import "main.css"
import App from "./App"
import {ContextProvider} from "./context"

 ReactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>, 
   document.getElementById('root')
 )