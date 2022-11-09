import styled from '@emotion/styled';

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
`;

export const Avatar = styled.img`
  width: 70px;
  border-radius: 50%;
`;

export const ContactWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const TelNumber = styled.a`
  color: white;
  :focus,
  :hover {
    color: purple;
  }
`;

export const Email = styled.a`
  color: white;
  :focus,
  :hover {
    color: purple;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: 0px;
  color: white;
  :focus,
  :hover {
    color: purple;
  }
`;
