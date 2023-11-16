import React, {useReducer} from "react";

function ReducerHook (){

    const masterStateUpdate = (state, action) => {
        switch (action.type) {
            case "CHANGE_NAME":
                return{
                    ...state,
                    name:action.name,
                    age: 10
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(masterStateUpdate, {id: 1, name:"John", age:34})
    return(
        <div>
            <h1>Reducer Hook</h1>
            <h2> NAME : {state.name}</h2>
            <button onClick={()=>dispatch({ name: "Smith", type:"CHANGE_NAME"})}>Change Name</button>
            <h2> NAME : {state.age}</h2>
        </div>
    )
}

export default ReducerHook


// why ? 
// useState v/s useReducer
// useState hook is easy to use when you are having primitive data types like number, string, etc. It is still fine to useState at some point for the non-primitive data types like objects when these objects are having 3 - 4 key value pairs
// But generally we will be having big complex objects containing lotz of key-value pairs so to update the state , prevState concept becomes complex,
// and then to make it easy we use useReducer hook . 
// useReducer : it takes two arguments : state , reducer function 
// this reducer function will be responsible to update the state variable.
// this reducer function takes two parameters state and action....
// useReducer is a hook which will return state and function to update that state variable that is dispatch. these variables will be used to access state and action in dom
// and it will take two params i.e. reducer function and initial state value.