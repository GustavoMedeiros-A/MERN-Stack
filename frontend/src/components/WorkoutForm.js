import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutForm = () => {
    // 
    const {dispatch} = useWorkoutsContext();
    // Create the state of the data
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault() // Evita que o redirecione ou faça o refresh para que não se perca os STATES

        const workout = { title, load, reps }

        // To post a new data -> with the url that post in the API, stringify the json 
        // Metodo POST para postar novos dados
        // Backend workout controller 
        const response = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json" // Means that the request body format is JSON 
            }
        })
        const json = await response.json(); // In the post we return json in both cases, if is wrong or right

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) { // Set all values as null
            setTitle("")
            setLoad("")
            setReps("")
            setError(null)
            console.log("new workout added", json)
            dispatch({type: "CREATE_WORKOUT", payload: json})
        }

    }
    
    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Excercise Title: </label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Load (in Kg): </label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />
            <label>Reps:  </label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm;