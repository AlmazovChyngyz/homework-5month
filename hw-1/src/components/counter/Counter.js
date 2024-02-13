import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from "./Counter.module.css";

const CounterApp = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    const increment = () =>
        dispatch({
            type: 'INCREMENT'
        });
    const decrement = () =>
        dispatch({ type: 'DECREMENT'
        });
    const clear = () =>
        dispatch({
            type: 'CLEAR'
        });
    const addTen = () =>
        dispatch({ type: 'ADD_TEN'
        });

    return (
        <div>
            <p>Count: {count}</p>
            <div className={classes.buttons}>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={clear}>Очистить</button>
                <button onClick={addTen}>+10</button>
            </div>
        </div>
    );
};

export default CounterApp;