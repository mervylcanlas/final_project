import { useState } from "react";
import './Search.css'

function Search({onSearch}) {

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Enter search keyword')
            return
        }

        onSearch({text})

    }

    return (
        <form onSubmit = {onSubmit} className = 'add-form'>
            <div className = 'form-control'>
                <input type = 'text' placeholder = "Search here..." value = {text} onChange = {(e)=> setText(e.target.value)}/>
            </div>
            <input className = 'btn' type = 'submit' value = 'Go'/>
        </form>
    )
}

export default Search
