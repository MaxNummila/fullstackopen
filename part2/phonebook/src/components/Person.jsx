const Person = ({ person, deleteButton }) => {
    const label = 'Delete Person'

    return <li>
        {person.name} {person.number}
        <button onClick={() => deleteButton(person.id)}>{label}</button>
    </li>
}

export default Person