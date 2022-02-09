import React from "react";
//import { findRenderedDOMComponentWithClass } from "react-dom/cjs/react-dom-test-utils.production.min";
import TodoItem from "./TodoItem"
class TodosList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteTodoProps={this.props.deleteTodoProps}
                        setUpdate={this.props.setUpdate}
                    />
                ))}
            </ul>
        )
    }
}
export default TodosList