import React from 'react';
import { useSelector } from 'react-redux';

import { List, Item } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getValue } from 'redux/selectors';

export const ContactList = () => {
  const contactsState = useSelector(getContacts);
  const filter = useSelector(getValue);

  const normalized = filter.toLocaleLowerCase();
  const contacts = contactsState.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalized)
  );

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Contact id={id} name={name} number={number} />
        </Item>
      ))}
    </List>
  );
};
