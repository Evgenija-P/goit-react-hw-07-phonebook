import React from 'react';
import { setTextFilter } from 'redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Label, Input, Title } from './Filter.styled';
import { getValue } from 'redux/selectors';

export const Filter = () => {
  const value = useSelector(getValue);

  const dispatch = useDispatch();
  const filretContacts = e => {
    dispatch(setTextFilter(e.currentTarget.value));
    console.log(e.currentTarget.value);
  };

  const filterId = nanoid(3);
  return (
    <Label htmlFor={filterId}>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        placeholder="Input name"
        value={value}
        onChange={filretContacts}
        id={filterId}
      />
    </Label>
  );
};
