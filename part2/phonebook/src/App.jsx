import { useState } from 'react'
import Persons from './components/Persons.jsx'
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm.jsx";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newPerson)) {
      alert(`${newPerson} is already added to the phonebook`)
      return
    }
    const personObject = {
      name: newPerson,
      number: newNumber,
      id: String(persons.length + 1),
    }
  
    setPersons(persons.concat(personObject))
    setNewPerson('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
		setFilter(event.target.value)
  }

	const personsToShow = persons.filter(person =>
		person.name.toLowerCase().includes(filter.toLowerCase())
	)

  return (
    <div>

      <h2>Phonebook</h2>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newPerson={newPerson}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberchange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App