import React, { useState } from "react"

const InputTodo = props => {
    const [inputText, setInputText] = useState({
        fName: "",
        lastName: "",
    })

    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("submitted")
    }

    return ( //continua
        <>
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Add todo..."
                    value={title}
                    name="title"
                    onChange={onChange}
                />
                <button className="input-submit">Submit</button>
            </form>
        </>

    )
}
export default InputTodo