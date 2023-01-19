import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  text-align: center;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const HeaderTitle = styled.div`
  padding: 1rem 2rem;
`;
