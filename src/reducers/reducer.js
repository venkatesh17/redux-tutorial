import { CHANGE_NAME, ADDNAME, ERROR, CHANGE_COLOR } from '../actions/actionTypes'


const intialState = { name: "reactgo", allNames: [], error: "", color:"red" }

const reducer = (state = intialState, action) => {
    console.log(action.color)

    if (action.type === ADDNAME) {
        return {
            allNames: state.allNames.concat(state.name),
            name: ""
        }
    }

    if (action.type === CHANGE_NAME) {
        return {
            ...state,
            name: action.name
        }
    }

    if (action.type === ERROR) {
        return {
            ...state,
            error: action.error
        }
    }

    if(action.type === CHANGE_COLOR){
        return {
            ...state,
            color:action.color
        }
    }

    return state


}

export default reducer;