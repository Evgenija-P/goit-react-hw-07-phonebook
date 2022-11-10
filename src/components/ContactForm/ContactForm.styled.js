import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding-top: 10px;
  color: white;
  font-weight: 500;
`;

export const Label = styled.label`
  display: flex;
  margin-right: 5px;
`;

export const Input = styled.input`
  margin-right: 10px;
  padding-left: 5px;

  width: 150px;
  height: 30px;

  background-color: #e09ffc;
  border: 1px solid rgba(33, 33, 33, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
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
