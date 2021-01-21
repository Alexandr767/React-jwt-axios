import axios from 'axios';

let token = localStorage.getItem('refreshToken');
const refTkn = axios({
    method: 'post',
            url: 'http://erp.apptrix.ru/api/clients/token/refresh/',
            data: {
                refreshToken: token,
            },
            headers:{
                Authorization: "Bearer" + refreshToken
            }
});


export default refTkn;