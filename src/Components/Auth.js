import React, {Component} from 'react';
import axios from 'axios';
// import {Redirect} from 'react-router-dom';



class FormAuth extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            is_logged: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
        // console.log(this.state)
    }
    handleSubmit(event) {
        // alert('Отправленное имя: ' + this.state.username + this.state.password);
        event.preventDefault();
        //Авторизация пользователя

        axios({
            method: 'post',
            url: 'http://erp.apptrix.ru/api/clients/token/',
            data: {
                username: this.state.username,
                password: this.state.password
            },
        })
        .then(res=> {
            
        
            localStorage.setItem('resfresh_token', res.data.refresh);
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('client_id', res.data.client_id);
            this.setState({
                is_logged: true,
            })
            
            console.log(res);
            console.log(res.data);
            console.log(this.state.is_logged);
        })
            .catch(function (error) {
                // handle error
                localStorage.clear();
                console.log(error);
              })
    }




    render(){
        
        return(
            <div className="row justify-content-center">
                <div className="col-5">
                <h1>Авторизация</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Name">Введите Логин</label>
                        <input className="form-control" id="NameAuth" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Введите логин" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Name" className="mt-3">Введите Пароль</label>
                        <input className="form-control" id="PassAuth" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Введите пароль" type="password" />
                    </div>
                    <input type="submit" className="btn btn-success mt-3" />
                </form>
                </div>
            </div>
        )
    }
    
}

export default FormAuth

