import React from "react"
import reactDOM from "react-dom"
//component file 
import TodoContainer from "./components/TodoContainer"
//stylesheet
import "./App.css"

//reactDOM.render(<TodoContainer />, document.getElementById("root"))

reactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)
