import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { BsPersonPlus } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const nameId = nanoid(3);
  const numberId = nanoid(3);
  const contacId = nanoid(2);
  const { contacts } = useSelector(getContacts);
  const [nameForm, setNameForm] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChangeName = e => {
    setNameForm(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const options = {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === nameForm.toLowerCase()
      )
    ) {
      toast.error('Oh, such a contact already exists!', options);
      return;
    }

    dispatch(addContact({ id: contacId, name: nameForm, phone: number }));

    reset();
  };

  const reset = () => {
    setNameForm('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          type="text"
          name="name"
          value={nameForm}
          id={nameId}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeName}
        />
        <Label htmlFor={numberId}>Number</Label>
        <Input
          type="tel"
          name="number"
          value={number}
          id={numberId}
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeNumber}
        />
        <Button type="submit">
          <BsPersonPlus size={33} />
        </Button>
      </Form>
    </>
  );
};
