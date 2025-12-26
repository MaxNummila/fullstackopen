import { useState, useEffect } from 'react'
import Persons from './components/Persons.jsx'
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm.jsx";
import personService from "./services/persons.js";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')


	useEffect(() => {
		personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
	}, [])

    const deleteButton = id => {
        const person = persons.find(p => p.id === id)

        personService
            .deletePerson(id)
            .then(() => setPersons(prev => prev.filter(p => p.id !== id)))
            .catch(error => {
                alert(
                    `the person '${person.name}' was already deleted from server`
                )
                setPersons(prev => prev.filter(p => p.id !== id))
            })
    }

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newPerson)) {
      alert(`${newPerson} is already added to the phonebook`)
      return
    }
    const personObject = {
      name: newPerson,
      number: newNumber,
    }

      personService
          .create(personObject)
          .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              setNewPerson('')
              setNewNumber('')
          })
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

      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newPerson={newPerson}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberchange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deleteButton={deleteButton} />
    </div>
  )
}


export default App