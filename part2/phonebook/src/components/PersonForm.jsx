const PersonForm = ({addPerson, newPerson, handlePersonChange, newNumber, handleNumberchange}) => {
	return (
		<form onSubmit={addPerson}>
			<div>
				name: <input value={newPerson} onChange={handlePersonChange} />
			</div>
			<div>
				number: <input value={newNumber} onChange={handleNumberchange} />
			</div>
			<div>
				<button type='submit'>add</button>
			</div>
		</form>
	)
}

export default PersonForm