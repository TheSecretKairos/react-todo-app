import React from "react"
import reactDOM from "react-dom"
//component file 
import TodoContainer from "./functionBased/components/TodoContainer"
//stylesheet
import "./functionBased/App.css"
//router-dom
import { BrowserRouter as Router } from "react-router-dom"

//reactDOM.render(<TodoContainer />, document.getElementById("root"))


reactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

/*reactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)*/
