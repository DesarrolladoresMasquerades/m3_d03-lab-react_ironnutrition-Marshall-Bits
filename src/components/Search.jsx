import { useState } from "react"

export default function Search(props) {
    const [filterLetter, setLetter] = useState("")

    const handleSelect = (e) => {
        setLetter(e.target.value)
        props.searchFilter(e.target.value)

    }
    return (
        <div>
            <h2>Search</h2>
            <form action="">
                <input value={filterLetter} onChange={handleSelect} type="text" />
            </form>
        </div>
    )
}