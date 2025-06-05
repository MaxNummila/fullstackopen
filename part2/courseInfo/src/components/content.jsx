const Part = ({ part }) => {
    return <p>{part.name} {part.exercises}</p>
}

const Content = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
            <p><strong>total of {total} exercises</strong></p>
        </div>
    )
}

export default Content