import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDataAction } from '../redux/action';
import classes from "./Forms.module.css";

function InputForm  ()  {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const addData = () => {
        dispatch(addDataAction({ name, email, password }));
    };

    return (
        <div>
            <div className={classes.inputWrap}>
                <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Почта" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={addData}>Добавить</button>

            {data.length > 0 && (
                <div>
                    {data.map(({ name, email, password }, index) => (
                        <div className={classes.formWrap} key={index}>
                            <h3>
                                Имя: {name}
                            </h3>
                            <h3>
                                Почта: {email}
                            </h3>
                            <h3>
                                Пароль: {password}
                            </h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InputForm;