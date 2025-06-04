const Total = ({ parts }) => {
    let totalExercises = 0;

    for (let i = 0; i < parts.length; i++){
        totalExercises += parts[i].exercises;
    }

    return (
        <p>Total number of exercises {totalExercises}</p>
    );
};

export default Total;