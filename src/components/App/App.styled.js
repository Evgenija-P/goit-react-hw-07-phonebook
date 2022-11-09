import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  font-size: 28px;
  gap: 15px;
  width: 700px;
  height: 100%;
  padding: 50px 20px;
  margin: 50px auto;
  color: #010101;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 15px;
  background: linear-gradient(0deg, #41a8bf, #a044c1, #6f1fbf);
`;

export const Title = styled.h1`
  color: white;
`;

export const TitleContacts = styled.h2`
  margin-top: 15px;
  color: white;
`;
