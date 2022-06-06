import { useState } from "react"


export default function AddFoodForm(props) {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        calories: "",
        servings: ""
    })

    function handleSubmit(event) {
        event.preventDefault()

        props.addFood(formData)

        setFormData({
            name: "",
            image: "",
            calories: "",
            servings: ""
        })
    }

    function handleDataChange(event) {
        const inputName = event.target.name
        let value = event.target.value

        setFormData({ ...formData, [inputName]: value })

    }

    return (
        <div>
            <h2>Add food</h2>
            <form onSubmit={handleSubmit}>
                <p>Name:</p>
                <input value={formData.name} name="name" type="text" onChange={handleDataChange} />
                <p>Image url:</p>
                <input value={formData.image} name="image" type="text" onChange={handleDataChange} />
                <p>Calories:</p>
                <input value={formData.calories} name="calories" type="number" onChange={handleDataChange} />
                <p>Servings:</p>
                <input value={formData.servings} name="servings" type="number" onChange={handleDataChange} />
                <br />
                <button type="submit">Add food</button>
            </form>
        </div>
    )
}