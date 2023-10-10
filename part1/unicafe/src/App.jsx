import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticsLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Stats = (props) => {
  if (props.all == 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No Feedback Given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
      <StatisticsLine text= "Good" value={props.good} />
      <StatisticsLine text= "Neutral" value={props.neutral} />
      <StatisticsLine text= "Bad" value={props.bad} />
      <StatisticsLine text= "All" value={props.all} />
      <StatisticsLine text= "Average" value={props.average.toFixed(1)} />
      <StatisticsLine text= "Percentage" value={`${props.positive.toFixed(1)}%`} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const setToGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(updatedGood + neutral + bad)
    setAverage((updatedGood - bad) / (updatedGood + neutral + bad))
    setPositive((updatedGood / (updatedGood + neutral + bad)) * 100)
  }
  const setToNeutral =() => {
    const updatedNeutral = (neutral + 1)
    setNeutral(updatedNeutral)
    setAll(good + updatedNeutral + bad)
    setAverage((good - bad) / (good + updatedNeutral + bad))
    setPositive((good / (good + updatedNeutral + bad)) * 100)
  }
  const setToBad = () => {
    const updatedBad = (bad + 1)
    setBad(updatedBad)
    setAll(good + neutral + updatedBad)
    setAverage((good - updatedBad) / (good + neutral + updatedBad))
    setPositive((good / (good + neutral + updatedBad)) * 100)
  }
  console.log('Show all', all)
  
  

  return (
    <div>
      <h1> Give Feedback </h1>
      <p>
        <Button handleClick={setToGood} text="Good" />
        <Button handleClick={setToNeutral} text="Neutral" />
        <Button handleClick={setToBad} text="Bad" />
      </p>
      <Stats good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />

    </div>
  )
}

export default App