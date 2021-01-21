import React from 'react';
import FormAuth from './Components/Auth';
import FormReg from './Components/signUp';
import UserInfo from './Components/main';
import { Route} from "react-router-dom";



 class App extends React.Component {
     render(){
         return(
                <div className="container">
                    
                        <Route path="/" component={ UserInfo }/>
                        <Route path="/signup" component={ FormReg }/>
                        <Route path="/login" component={ FormAuth }/>
                    
                </div>
         )
     }
 }

export default App;
