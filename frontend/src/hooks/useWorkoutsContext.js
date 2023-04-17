// Make a custom hook
import { WorkoutContext } from "../context/WorkoutContext"; // O context que foi criado com o "createContext()"
import { useContext } from "react" // Vamos usar isso para consumir o context

export const useWorkoutsContext = () => { // Toda vez que quisermos usar nosso workoutData nos invocamos isso e pegamos os valores
    const context = useContext(WorkoutContext) // Retorna o valor desse context que é passado no PROVIDER component

    if(!context) {
        throw Error("useWorkoutContext must be used inside an WorkoutContextProvider")
    }

    return context
}