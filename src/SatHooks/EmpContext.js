import React, {useState, createContext} from "react";

export const EmpContext = createContext();

function ContextProvider (props){
    const [user, setUser] = useState({id:1, username:"Ram", age:45})
    const [user1, setUser1] = useState({id:1, username:"Ram", age:45})
    return(
        <EmpContext.Provider value={{user, setUser, user1, setUser1}}>
            {props.children}
        </EmpContext.Provider>
    )
}

export default ContextProvider



// In this file we are creating a context for Employees.
// Very first step is that you need to create the context using createContext function.
// we will be creating a functional component which will return Context.Provider.  props.children is a component.



// useContext :
// this hook is used to use the context api. 
// props drilling : If you have four components , and you need to pass the data from one comp to second then to third then to fourth comp. But this data will be used only in first and fourth comp. So over here second and third comp is having or receiving props data which they are not even using . this is known as props drilling. 
// Soultion of props drilling : Context API.
// Context API : Lets you store the data at a single place and then in whatsoever component you want to receive the data you need to make sure that the component is wrapped with the context api. 
// Now to use the context api data in the component you need useContext hook.