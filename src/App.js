import React from 'react';
import FormAuth from './Components/Auth';
import FormReg from './Components/signUp';
import UserInfo from './Components/main';
import { Switch, Route} from "react-router-dom";


 class App extends React.Component {
     render(){
         return(
                <div className="container">
                    <switch>
                        <Route path="/" component={ UserInfo }/>
                        <Route path="/signup" component={ FormReg }/>
                        <Route path="/login" component={ FormAuth }/>
                    </switch>
                </div>
         )
     }
 }

export default App;
