import React, { useRef, useState } from 'react'
import RefExmpleChild from './RefExmpleChild';

function RefExample() {
    const[name,setName]=useState();
    
    const nameRef = useRef("");
    const ageRef = useRef(null);
  
    const handleChangeName = () =>{
        setName(nameRef.current.value)
    }
    const ref = {nameRef,ageRef}
    console.log(name,nameRef);
    return (
    <div>
        <h1>useRef</h1>
        <input type="text" ref={nameRef}/>
        <button onClick={handleChangeName}>Click</button>
        {nameRef && <RefExmpleChild name = {name} ref = {ref}/>}
            {name}
    </div>
  )
}

export default RefExample


// In this case we have created a state variable and assigned its value to a input field , now we want that input value should be updated every time but it should not cause rendering every time. So when we update the state in component it causes render of component.
// to avoid this we can use useRef hook
// it returns a value which is not mutable 
// a component using useRef hook also known as uncontrolled component because in this case the changes happening on the dom is not controlled by the state variable

// and does not trigger re-rendering of the component when its content changes
// so in our case if we change input field then also our component will not be re rendered
// but with useRef we have full control over what should happen on each event

