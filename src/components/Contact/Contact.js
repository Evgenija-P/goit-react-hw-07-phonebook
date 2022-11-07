import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineDeleteForever } from 'react-icons/md';

import { Button } from '../ContactList/ContactList.styled';
import { deletContact } from 'redux/contactsSlice';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deletContact(id));
  return (
    <>
      <p>
        <BsTelephone size={24} color={'blue'} /> {name}: {number}
      </p>
      <Button type="button" onClick={handleDelete}>
        <MdOutlineDeleteForever size={24} color={'blue'} />
      </Button>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
