import { useState } from 'react'

//Takes a text as a parameter and converts it to a header
const Header = ({ text }) => {
    return (
        <h1>{text}</h1>
    );
};

//Takes a function handleClick and a text as parameters and creates a button with the functionality of the function and the name of the text
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

//Takes a text and a value as parameters and makes a tablecomponent with the corresponding name and value
const StatisticsLine = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
);

//Takes all the different types of statistics wanted as parameter and creates an HTML table with these statistics using the StatisticsLine component
const Statistics = ({ good, neutral, bad, total, average, positive }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>

                    </tr>
                </thead>
                <tbody>
                    <StatisticsLine text='good' value={good} />
                    <StatisticsLine text='neutral' value={neutral} />
                    <StatisticsLine text='bad' value={bad} />
                    <StatisticsLine text='total' value={total} />
                    <StatisticsLine text='average' value={average} />
                    <StatisticsLine text='positive' value={`${positive}%`} />
                </tbody>
            </table>
        </div>
    );
}

//The app component itself, contains all the button functionality, calculations for average and positive feedback and returns the page HTML
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
    let statisticsDisplay;

    const calculateAverage = (updatedGood, updatedNeutral, updatedBad) => {
        const totalScore = (updatedGood * 1) + (0) + (updatedBad * -1);
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

    if(total === 0){
        statisticsDisplay = <p>No feedback given</p>
    } else{
        statisticsDisplay = (
            <Statistics
                good={good} neutral={neutral} bad={bad} average={average} positive={positive} total={total}
            />
        );
    }


    return (
        <div>
            <Header text={feedback.name} />
            <Button handleClick={handleGoodClick} text='good' />
            <Button handleClick={handleNeutralClick} text='neutral' />
            <Button handleClick={handleBadClick} text='bad' />
            <Header text={statistics.name} />
            {statisticsDisplay}
        </div>
    )
}

export default App