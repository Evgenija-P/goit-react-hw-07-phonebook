import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BsTelephone, BsXCircle, BsAt } from 'react-icons/bs';

import {
  Item,
  Avatar,
  ContactWrapper,
  ButtonWrapper,
  TelNumber,
  Button,
  Email,
} from './Contact.styled';
import { deleteContact } from 'redux/operations';

export const Contact = ({ id, name, number, avatar, mail }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const telNumber = 'tel:' + number;
  const emailAdres = `mailto:` + mail;

  return (
    <Item>
      <ContactWrapper>
        <Avatar src={avatar} alt={name} width="100" />
        <div>
          {name}: <p>{number}</p>
        </div>
      </ContactWrapper>

      <ButtonWrapper>
        <TelNumber href={telNumber}>
          <BsTelephone size={33} />
        </TelNumber>
        <Email href={emailAdres}>
          <BsAt size={38} />
        </Email>

        <Button type="button" onClick={handleDelete}>
          <BsXCircle size={33} />
        </Button>
      </ButtonWrapper>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
