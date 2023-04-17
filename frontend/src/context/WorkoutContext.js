import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

export const workoutsReducer = (state, action) => {
    switch (action.type) {
        // Setar todos os workout
        case "SET_WORKOUTS":
            return {
                // retornamos o estado que queremos que seja // Um array de todos os workouts
                workouts: action.payload
            }
        case "CREATE_WORKOUT":
            return {
                // Adiciona o novo workout e junto manda todos os outros ja criados (CURRENT STATE)
                // State são os que já existem. O estado atual dos workouts
                workouts: [action.payload, ...state.workouts]
            }
        case "DELETE_WORKOUT":
            return {
                // Se não for igual ele mantem ele
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const WorkoutContextProvider = ({ children }) => {

    // Parecido com use state (state e setState{dispatch})
    // Especifica um valor inicial
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    }); 
    // Dispatch -> Usado para atualizar e criar novos STATES
    return (
        // Return a template 
        // precisa estar em volta de todo as parte da apçicação que precisarem acessar o "context"
        // Vamos passar isso no index.js que tem todos os "components tree" vindo de app.js
        <WorkoutContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutContext.Provider> 
    )
}


