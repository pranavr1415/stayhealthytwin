import React from 'react'
import styles from './calculator.module.css'

const Calculator = () => {
  return (
    <div className={styles.calculator}>
        <h1>BMI Calculator</h1>
        <form>
            <label htmlFor="weight">Weight (kg):</label>
            <input type="number" id="weight" name="weight" required />
            <label htmlFor="height">Height (cm):</label>
            <input type="number" id="height" name="height" required />
            <button type="submit">Calculate BMI</button>
        </form>
        <div className={styles.result}>
            <p>Your BMI will be displayed here.</p>
        </div>
    </div>
  )
}

export default Calculator