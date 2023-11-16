// import { cleanup } from "@testing-library/react";
import React , {useEffect, useState, useContext} from "react";
import { EmpContext } from "./EmpContext";

function Comp1(){
    const data = useContext(EmpContext)
    console.log(data);
    const [name, setName] = useState("John")
    // const [user, setUser] = useState({id:1, username:"Smith", age:45})

    // const updateAge = () => {
    //     setUser(prevState=>{
    //         return{
    //             ...prevState,
    //             age:prevState.age+10,
    //             username:"Doe"
    //         }
    //     })
    // }

    //mounting , updating
    useEffect(()=>{
        console.log("inside effect");
    })

    //mounting 
    useEffect(()=>{
        console.log("inside effect2");
    }, [])

    //unmounting stage 
    useEffect(()=>{
        return function cleanup(){

        }
    })
    return(
        <div>
            <h1>HOOKS</h1>

            {name}

            <button onClick={()=>setName("Doe")}> Modify state value</button>

            {/* <h2>User object Details</h2>
            {user.username} || {user.age}

            <button onClick={updateAge}>Increment Age</button> */}
        </div>
    )
}

export default Comp1;




// useEffect : 
// alternative of lifecycle methods like (which is present and can be used only and only in class based components)
// when you want to make server calls : 
// componentDidMount, componentDidUpdate, componentWillUnmount
// hook which accepts first parameter as a callback function, and second parameter is dependency array
// if you do not want that useEffect should run like a componentDidUpate then : pass an empty dependency array.
// How the useEffect can be executed like componentDidUpdate only for one state variable: pass the state variable for which you want to execute useEffect in the dependency array.
// clean up function : this function gets executed when the component is unmounted from the screen . This is mostly used for memory leaks  


// useState 
// definition, structure
// how to use the state variable in dom
// update the state variable -> by creating a separate function and by writing in the same line
// prevState concept 
// This prevState is required when you want to use the initial value or the last value of the state when you are updating the new state variable value.
//  alternative of creating state variables in functional component