import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { List, Item } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getValue } from 'redux/selectors';

export const ContactList = () => {
  const filter = useSelector(getValue);
  const { contacts, isLoading, error } = useSelector(getContacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalized = filter.toLocaleLowerCase();
  const contactsState = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalized)
  );

  return (
    <List>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {contacts &&
        contactsState.map(({ id, name, phone }) => (
          <Item key={id}>
            <Contact id={id} name={name} number={phone} />
          </Item>
        ))}
    </List>
  );
};
