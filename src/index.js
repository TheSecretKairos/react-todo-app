import React from "react"
import reactDOM from "react-dom"
//component file 
import TodoContainer from "./functionBased/components/TodoContainer"
//stylesheet
import "./functionBased/App.css"

//reactDOM.render(<TodoContainer />, document.getElementById("root"))

reactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)
