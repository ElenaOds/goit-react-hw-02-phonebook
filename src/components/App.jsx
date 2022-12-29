import React, {Component} from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import {ContactList} from './ContactList/ContactList';
import {MainTitle, Title} from './App.styled';



class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  };

  // handleSubmit = e => {
  //   const id = nanoid();
  //   const name = e.name;
  //   const number = e.number;
  //   const contactsLists = [...this.state.contacts];

  //   if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
  //     alert(`${name} is already in contacts.`);
  //   } else {
  //     contactsLists.push({ name, id, number });
  //   }

  //   this.setState({ contacts: contactsLists });
  // };

  // addContact = (name, number) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   if (
  //     this.state.contacts.find(
  //       findContact => findContact.name === newContact.name
  //     )
  //   ) {
  //     alert(`${newContact.name} is already in contacts`);
  //   } else {
  //     this.setState(prevState => ({
  //       contacts: [newContact, ...prevState.contacts],
  //     }));
  //   }
  //   return;
  // };

  addContact = (name, number) => {
    const newContact = {
          id: nanoid(),
          name,
          number,
        };
    this.setState(prevState => {
          return {
            contacts: [newContact, ...prevState.contacts],
          };
        });
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
        onSubmit={this.addContact}
        />

        <Title>Contacts</Title>
        <Filter filter={filter} handleChange={this.handleChange}/>
        <ContactList contacts={this.getFilteredContacts()}
        onDeleteContact={this.deleteContact}/>
      </div>
    )};
  
};

export default App;