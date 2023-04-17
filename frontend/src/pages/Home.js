import { useEffect, useState } from "react"

// Components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {

    const [workouts, setWorkouts] = useState(null)
    
    useEffect(() => {
        
        const fetchWorkouts = async () => {
            const response = await fetch("/api/workouts");
            const json = await response.json();

            if(response.ok) {
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, []) // Empty because is just fired once

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