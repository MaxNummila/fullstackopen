import { useState } from 'react'

// Reusable button component that accepts an event handler and button text
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Header = ({ text }) => {
  return (
      <h1>{text}</h1>
  );
};



// Function to generate a random integer between min (inclusive) and max (exclusive)
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const App = () => {
  // Define anecdotes array with each anecdote as an object that has text and points
  const [anecdotes, setAnecdotes] = useState([
    { text: 'If it hurts, do it more often.', points: 0 },
    { text: 'Adding manpower to a late software project makes it later!', points: 0 },
    { text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', points: 0 },
    { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', points: 0 },
    { text: 'Premature optimization is the root of all evil.', points: 0 },
    { text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', points: 0 },
    { text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', points: 0 },
    { text: 'The only way to go fast, is to go well.', points: 0 }
  ]);

  // State to track which anecdote is currently displayed
  const [selected, setSelected] = useState(getRandomInt(0, anecdotes.length));

  const anecdotesHeader = {
    name: 'Anecdote of the day'
  }

  const mostVotesHeader = {
    name: 'Anecdote with most votes'
  }

  const [mostVoted, setMostVoted] = useState({text:'', points: 0});


  const mostVotedFinder = () => {
    return anecdotes.reduce((max, anecdote) => {
      if (anecdote.points > max.points) {
        return anecdote;
      } else {
        return max;
      }
    });
  };

  // Function to select a new random anecdote
  const handleAnecdoteClick = () => {
    const randomIndex = getRandomInt(0, anecdotes.length);
    setSelected(randomIndex);
  };

  // Function to increase the vote count of the currently displayed anecdote
  const handleVoteClick = () => {
    const updatedAnecdotes = [...anecdotes];
    updatedAnecdotes[selected].points += 1;
    setAnecdotes(updatedAnecdotes);
    setMostVoted(mostVotedFinder());
  };

  const handleVoteClick = () => {
    const updatedAnecdotes = anecdotes.map((anecdote, index) =>
      index === selected ? { ...anecdote, points: anecdote.points + 1} : anecdote
    );

    setAnecdotes(updatedAnecdotes);
  }

  return (
      <div>
        <Header text={anecdotesHeader.name} />
        <p>{anecdotes[selected].text}</p>
        <p>has {anecdotes[selected].points} points</p>
        <Button handleClick={handleAnecdoteClick} text="New anecdote" />
        <Button handleClick={handleVoteClick} text="Vote" />
        <Header text={mostVotesHeader.name}/>
        <p>{mostVoted.text}</p>
        <p>has {mostVoted.points} points</p>
      </div>
  );
}

export default App;
