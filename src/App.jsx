import { useEffect, useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const contacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contactsList, setContactsList] = useState(JSON.parse(localStorage.getItem("Contacts")) ?? contacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify(contactsList));
  }, [contactsList]);

  const filteredContacts = contactsList.filter((task) =>
    task.name.toLowerCase().includes(filter.toLowerCase())
  );
  const deleteContact = (contactId) => {
    setContactsList((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  const addContact = (newContact) => {
    newContact.id = nanoid();
    setContactsList((prevList) => {
      return [...prevList, newContact]
    })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm newContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter}/>
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  )
}

export default App
