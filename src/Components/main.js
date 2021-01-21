import React from 'react';
// import axios from 'axios';
// import {Redirect} from 'react-router-dom';

const UserInfo = (props) => {
    
    
        const user_id = localStorage.getItem('client_id');
        if(user_id){
            return <h1>Пользователь: { user_id }</h1>
        }
        else{
            return <h1>Главная</h1>
        }
    
    
        
    
}
 
export default UserInfo;