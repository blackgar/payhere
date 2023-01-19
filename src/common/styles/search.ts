import styled from 'styled-components';

export const SearchBox = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
  border: 0;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.boxColor};
  border-radius: 5rem;
  width: 50%;
  height: 5rem;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 32%;
  right: 26%;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: ${props => props.theme.btnColor};
  border: 0;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 1rem;
`;

export const SVG = styled.svg`
  position: absolute;
  left: 27%;
  top: 50%;
`;
