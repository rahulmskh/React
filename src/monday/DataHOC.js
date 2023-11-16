import React, { useState } from "react";
import Main from "../FriRouter/Main";


function DataHOC (WrappedComponent) {

    function WrappingComponent(props){

    const [user, setUser] = useState({id:1, name:"John"});

    const a = localStorage.getItem("user");
        return(
            <div>
               {a ? 
                <WrappedComponent number={props} data={user} setData={setUser}/>
               :
               <Main/>}
            </div>
        )
    }

    return WrappingComponent
}
export default DataHOC


// Higher Order Component : A component which can send the data to wrapped component without even being rendered on screen.

// We do not render HOC on the screen, we just receive the data from it.

// export default App; //Normal Component

// export default DataHOC(App) //Component wrapped with HOC

// App is wrapped component, DataHOC is wrapping component. HOC component will pass the data to App component.

// It is a functional component or a function which takes a component as a parameter and return the new component with the data you want to share.

// Pure Component : A component will be rendered only in the case when the state or props variables value will be changed
//  or updated. Ex: if initially state varible name = "John", now this value gets updated to name = "Doe", then rendering the
//  component again is good and we should. But if the state variable gets updated with the same value name = "John", then in this case
//  we should not rerender our component.

// Class component : React Provides React.PureComponent to create a pure component which inside runs shouldComponentUpdate
//  lifecycle method to check if the prev state or props value has been updated with new value or not.
//  If the value is new then only the component will be rendered on screen.

// Function Component : Earlier we were not able to create the pure component in Functional cmponent. 
// a third party librbary came named as Recompose , pure, Wrap your functional component with pure then your
//  component will become a pure component. But later React released memo module in its library.