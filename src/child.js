import React from 'react'
import { useContext } from 'react'
import counterContext from './CounterContext'


const Child=()=>{
    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return(
        <div>
            <h1>this is first child</h1>  
            <h3>The Counter value is ={counterValue}</h3>  
        </div>

    )
}
export default Child