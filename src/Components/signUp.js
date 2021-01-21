import React from 'react'


const FormReg = () => {




    return(
        <div className="row justify-content-center">
            <div className="col-5">
                <h1>Форма регистрации</h1>
                <form>
                    <div className="form-group ">
                        <label htmlFor="email" className="mt-3">Введите почту*</label>
                        <input type="email" id="email" name="email" className="form-control" placeholder="Введите e-mail" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass" className="mt-3">Введите пароль*</label>
                        <input type="password" id="pass" name="pass" className="form-control" placeholder="Введите Пароль" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phon" className="mt-3">Введите телефон</label>
                        <input type="text" id="phon" name="phone" className="form-control" placeholder="Введите Телефон" aria-describedby="podskazka" />
                        <small id="podskazka" className="text-muted">Международный формат. Может использоваться в качестве логина</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="invit" className="mt-3">Invited by</label>
                        <select id="invit" name="invite" className="form-control" >
                            <option selected value="RU-637164">RU-637164</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="mt-3">Ваше имя</label>
                        <input type="text" id="name" name="name" className="form-control" placeholder="Введите что-нибудь" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Sname" className="mt-3">Ваша фамилия</label>
                        <input type="text" id="Sname" name="Surname" className="form-control" placeholder="Введите что-нибудь" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="keySt" className="mt-3">Ключ страны</label>
                        <input type="text" id="keySt" name="keySt" className="form-control" placeholder="Введите что-нибудь" />
                    </div>
                    <button type="button" className="btn btn-primary mt-5">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    )
    
}


export default FormReg