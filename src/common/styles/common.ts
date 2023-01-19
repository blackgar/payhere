import styled from 'styled-components';

export const Container = styled.div<{ len: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${props => (props.len > 6 ? '100%' : '100vh')};
  padding-top: 5rem;
  padding-bottom: 10rem;
  background-color: #95e1ff;
`;

export const Title = styled.div<{ size: string }>`
  font-size: ${props => props.size};
  font-weight: bold;
  color: ${props => props.theme.subTextColor};
`;
