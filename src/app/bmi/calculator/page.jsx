import React, { useState } from 'react'
import styles from './calculator.module.css'

const Calculator = () => {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi , setBmi] = useState(0); 

    const handleCalc = () => {
        setBmi((weight)/(height**2))
    }
 
 
return (
    <div className={styles.calculator}>
        <h1>BMI Calculator</h1>
        <form onSubmit={handleCalc}>
            <label htmlFor="weight">Weight (kg):</label>
            <input type="number" id="weight" name="weight" value={weight} onChange={(e) => {setWeight(e.currentTarget.value)}} required />
            <label htmlFor="height">Height (cm):</label>
            <input type="number" id="height" name="height" value={height} onChange={(e) => {setHeight(e.currentTarget.value)}} required />
            <button type="submit">Calculate BMI</button>
        </form>
        <div className={styles.result}>
            <p>Your BMI is {bmi}</p>
        </div>
    </div>
  )
}

export default Calculator