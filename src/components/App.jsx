import React, {Component} from 'react';
import { nanoid } from 'nanoid';
import { ContactForm }  from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import {MainTitle, Title} from './App.styled';



class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = [...this.state.contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    this.setState({ contacts: contactsLists });
  };
  

  handleChange = event => {
    this.setState ({ [event.target.name]: event.target.value});
  };

    
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  getFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };

  render () {
    const {filter} = this.state;
    
    return (
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm 
        handleSubmit={this.handleSubmit}
        />

        <Title>Contacts</Title>
        <Filter filter={filter} handleChange={this.handleChange}/>
        <ContactList contacts={this.getFilteredContacts()}
        onDeleteContact={this.deleteContact}/>
      </div>
    )};
  
};

export default App;