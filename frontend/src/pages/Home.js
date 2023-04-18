import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
 
// Components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {


    const { workouts, dispatch } = useWorkoutsContext() // GLOBAL CONTEXT

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("/api/workouts")
            const json = await response.json()

            if(response.ok) {
                dispatch({type: "SET_WORKOUTS", payload: json}) // Passa o que sera feito pelo dispatch e o novo valor
            }
        }

        fetchWorkouts();
    }, [dispatch]) // Quando o dispatch for alterado, o useEffect vai ser executado novamente


    // Código antes de usarmos o HOOK que criamos (workoutContext)
    // const [workouts, setWorkouts] = useState(null) // Seta o estado inicial como nulo
    
    // useEffect(() => { // Faz essa função ser ativada quando esse componente for chamado
        
    //     const fetchWorkouts = async () => {
    //         const response = await fetch("/api/workouts"); // usa esse path para buscar os dados
    //         // const response = await fetch("localhost:4000/api/workouts"); // Não é necessário fazer dessa forma porque no proxy 
    //         //no package json já passamos a url
    //         const json = await response.json(); // Transforma os dados em json

    //         if(response.ok) {
    //             setWorkouts(json) // set os dados
    //         }
    //     }

    //     fetchWorkouts()
    // }, []) // Empty because is just fired once

    return (
        <div className="home">
            <div className="workouts">
                {/* if workouts is null, the map is never be run*/}
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home