import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.',
  ]

  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }
  const voteAnecdote = () => {
    const votes = [...vote]
    votes[selected] += 1
    setVote(votes)
  }
  // Function to find the index of the anecdote with the most votes
  const indexOfMostVotedAnecdote = () => {
    let maxVotes = -1
    let maxIndex = -1
    for (let i = 0; i < vote.length; i++) {
      if (vote[i] > maxVotes) {
        maxVotes = vote[i]
        maxIndex = i
      }
    }
    return maxIndex
  }

  const mostVotedIndex = indexOfMostVotedAnecdote()

  return (
    <div>
      <h1>Software Engineering Anecdotes</h1>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {vote[selected]}</p>
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={getRandomAnecdote}>Next Anecdote</button>

      <h2>Most Voted Anecdote</h2>
      <p>{anecdotes[mostVotedIndex]}</p>
      <p>Votes: {vote[mostVotedIndex]}</p>
    </div>
  )
}

export default App