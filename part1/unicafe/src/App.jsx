import { useState } from 'react'


const Header = ({ text }) => {
    return (
        <h1>{text}</h1>
    );
};
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const StatisticsDisplayer = ({ name, amount }) => (
    <p>{name} {amount}</p>
);

const Statistics = (props) => {

}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    const feedback = {
        name: 'give feedback'
    }
    const statistics = {
        name: 'statistics'
    }

    const calculateAverage = (updatedGood, updatedNeutral, updatedBad) => {
        const totalScore = (updatedGood * 1) + (updatedNeutral * 0) + (updatedBad * -1);
        const totalResponses = updatedGood + updatedNeutral + updatedBad;
        if (totalResponses === 0) {
            return 0;
        }
        return totalScore / totalResponses;
    };

    const calculatePositive = (updatedGood, updatedNeutral, updatedBad) => {
        const totalResponses = updatedGood + updatedNeutral + updatedBad;
        if (totalResponses === 0) {
            return 0;
        }
        return (updatedGood / totalResponses) * 100;
    }

    const handleGoodClick = () => {
        const updatedGood = good +1
        const newTotal = updatedGood + neutral + bad
        setGood(updatedGood)
        setTotal(newTotal)
        setAverage(calculateAverage(updatedGood, neutral, bad))
        setPositive(calculatePositive(updatedGood, neutral, bad))
    }

    const handleNeutralClick = () => {
        const updatedNeutral = neutral +1
        const newTotal = good + updatedNeutral + bad;
        setNeutral(updatedNeutral);
        setTotal(newTotal);
        setAverage(calculateAverage(good, updatedNeutral, bad))
        setPositive(calculatePositive(good, updatedNeutral, bad))
    }

    const handleBadClick = () => {
        const updatedBad = bad + 1
        const newTotal = good + neutral + updatedBad;
        setBad(updatedBad);
        setTotal(newTotal);
        setAverage(calculateAverage(good, neutral, updatedBad));
        setPositive(calculatePositive(good, neutral, updatedBad))
    }


    return (
        <div>
            <Header text={feedback.name} />
            <Button handleClick={handleGoodClick} text='good' />
            <Button handleClick={handleNeutralClick} text='neutral' />
            <Button handleClick={handleBadClick} text='bad' />
            <Header text={statistics.name} />
            {StatisticsDisplayer({name: 'good', amount: good})}
            {StatisticsDisplayer({ name: 'neutral', amount: neutral })}
            {StatisticsDisplayer({ name: 'bad', amount: bad })}
            {StatisticsDisplayer({name: 'total', amount: total})}
            {StatisticsDisplayer({name: 'average', amount: average})}
            {StatisticsDisplayer({name: 'positive', amount: `${positive}%`})}
        </div>
    )
}

export default App