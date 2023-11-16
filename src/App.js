
import React,{Component} from "react";
import Parent from "./Friday/Parent";
import Main from "./FriRouter/Main";
import RefExample from "./Saturday/RefExample";
// import Comp1 from "./SatHooks/Comp1";
import ContextProvider from "./SatHooks/EmpContext";
import Temp from "./monday/Temp";
import Comp1 from "./Tuesday/Comp1";
import ReducerHook from "./Thursday/ReducerHook";


class App extends Component{
  render(){
    return(
      <>

        {/* <Parent/> */}
        
        {/* <Temp number={1}/> */}

        {/* <Main/> */}

        {/* <RefExample/> */}

        {/* <Comp1/> */}

        {/* <ContextProvider>
          <Comp1/>
        </ContextProvider> */}

        {/* <ReducerHook/> */}
        
        <Comp1/>
      </>
    )
  }
}
export default App;