export default function Foodbox(props) {
    return (
            <div
                title={props.food.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img className="App-logo" src={props.food.image} alt="foodImage" height={60} />
                <h3>{props.food.name}</h3>
                <p>Calories: {props.food.calories}</p>
                <p>Servings: {props.food.servings}</p>
                <p>
                    <b>Total Calories: {props.food.calories * props.food.servings}</b> kcal
                </p>
                <button type="primary" onClick={()=>props.deleteFoodById(props.food.name)}> Delete </button>
            </div>

    )
}