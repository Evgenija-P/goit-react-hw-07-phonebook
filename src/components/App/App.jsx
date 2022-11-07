import React from 'react';
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
    </AppWrapper>
  );
};
