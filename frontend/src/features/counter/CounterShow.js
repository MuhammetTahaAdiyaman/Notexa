import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { topla, cikar } from './counterSlice'

function CounterShow() {

    const deger = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(topla())}>+</button>
            <span>{deger}</span>
            <button onClick={() => dispatch(cikar())}>-</button>
        </div>
    )
}

export default CounterShow