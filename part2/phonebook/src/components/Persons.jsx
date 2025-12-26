import Person from './Person'

const Persons = ({personsToShow, deleteButton}) => {
	return (
		<ul>
			{personsToShow.map(person => (
				<Person key={person.id} person={person} deleteButton={deleteButton} />
			))}
		</ul>
	)
}

export default Persons