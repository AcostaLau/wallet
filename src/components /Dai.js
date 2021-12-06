import React from 'react'
import Aprove from './buttons/Aprove'
import Transfer from './buttons/Trasnfer'

const Dai = () => {
    return (
        <>
            <h1>DAI</h1>
            <p>Allowance</p>
            <p>Amount:</p>
            <input type='number'></input>
            <Aprove/>
            <Transfer/>
        </>
    )
}


export default Dai