import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newPerson} 
            onChange={handlePersonChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <Person key={person.name} person={person} />
        ))}
      </ul>
    </div>
  )
}

export default App