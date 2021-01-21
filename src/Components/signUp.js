import React from 'react';
// import axios from 'axios';
import {Component} from 'react';

class FormReg extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            },
            phone: "",
            invited_by: null,
            name: "",
            surname: "",
            country_key: "",
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        })
        
        
        console.log(name);
        console.log(this.state)
    }
    // handleSubmit(event) {
    //     // alert('Отправленное имя: ' + this.state.username + this.state.password);
    //     event.preventDefault();
    //     //Авторизация пользователя

        // axios({
        //     method: 'post',
        //     url: 'http://erp.apptrix.ru/api/clients/create/',
        //     data: {
        //         user:{
        //             email: this.state.user.email,
        //             password: this.state.user.password,
        //         },
        //         name: this.state.name,
        //         surname: this.state.surname,
        //         invited_by: this.state.invited_by,
        //         country_key: this.state.country_key,
        //         phone: this.state.phone
        //     },
        //     // responseType: JSON,
        //     // console: (response)=>{ console.log(response)},
        // })
    //         .then(res=> {
    //             console.log(res);
    //             // console.log(res.data);
    //             // if(res.data.status>=200 && res.data.status<300){
    //             //     localStorage.setItem('resfresh_token', res.data.refresh);
    //             //     localStorage.setItem('access_token', res.data.access);
    //             //     localStorage.setItem('username', res.data.username);
    //             //     localStorage.setItem('client_id', res.data.client_id);
    //             // }
    //             // else{
                    
    //             // }
                
    //         })
    // }


    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-5">
                    <h1>Форма регистрации</h1>
                    <form>
                        <div className="form-group ">
                            <label htmlFor="email" className="mt-3">Введите почту*</label>
                            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Введите e-mail" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass" className="mt-3">Введите пароль*</label>
                            <input type="password" id="pass" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Введите Пароль" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phon" className="mt-3">Введите телефон</label>
                            <input type="text" id="phon" name="phone" value={this.state.phone} onChange={this.handleChange} className="form-control" placeholder="Введите Телефон" aria-describedby="podskazka" />
                            <small id="podskazka" className="text-muted">Международный формат. Может использоваться в качестве логина</small>
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="invit" className="mt-3">Invited by</label>
                            <select id="invit" name="invite" className="form-control" value={this.state.invited_by} onChange={this.handleChange} >
                                <option selected value="RU-637164">RU-637164</option>
                            </select>
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="name" className="mt-3">Ваше имя</label>
                            <input type="text" id="name" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} placeholder="Введите что-нибудь" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Sname" className="mt-3">Ваша фамилия</label>
                            <input type="text" id="Sname" name="surname" className="form-control" value={this.state.surname} onChange={this.handleChange} placeholder="Введите что-нибудь" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="keySt" className="mt-3">Ключ страны</label>
                            <input type="text" id="keySt" name="country_key" className="form-control" value={this.state.country_key} onChange={this.handleChange} placeholder="Введите что-нибудь" />
                        </div>
                        <button type="button" className="btn btn-primary mt-5">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        )
    }
    
    
}


export default FormReg