import React from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { AppWrapper, Title, TitleContacts } from './App.styled';

export const App = () => {
  return (
    <AppWrapper>
      <Title>Phonebook</Title>
      <ContactForm />

      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
      <ToastContainer transition={Flip} />
    </AppWrapper>
  );
};
