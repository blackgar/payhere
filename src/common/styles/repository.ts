import styled from 'styled-components';

export const ListItemBox = styled.div`
  padding: 0.5rem 1.2rem;
  margin-top: 0.5rem;
`;
export const ListItemWrapper = styled.ul`
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: ${props => props.theme.boxColor};
  display: flex;
  align-items: center;
  width: 60%;
  margin-bottom: 1rem;
`;
export const ListItemContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const ListTitleWrapper = styled.div`
  width: 100%;
  margin-right: 1rem;
`;
export const ListNumberWrapper = styled.div`
  width: 20%;
`;
export const ListImgWrapper = styled.div`
  background-color: ${props => props.theme.subBoxColor};
  margin-right: 1rem;
`;
export const ListImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin: 0.5rem;
`;
export const ListNumber = styled.li``;
export const ListUserName = styled.li`
  margin-bottom: 0.5rem;
`;
export const ListRepoName = styled.li`
  font-weight: bold;
  font-size: 1.25rem;
`;
export const ListDescription = styled.li`
  color: ${props => props.theme.subTextColor};
  margin-bottom: 0.5rem;
`;
export const ListComments = styled.li`
  text-align: center;
  margin-bottom: 0.5rem;
`;
export const ListCreatedAt = styled.li`
  text-align: center;
`;
export const ListRegisterWrapper = styled.div`
  width: 5rem;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  text-align: center;
`;
export const ListRegisterBtn = styled.button`
  border-radius: 0.5rem;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.btnColor};
  width: 4rem;
  height: 2rem;
  margin-bottom: 0.25rem;
  color: white;
  font-size: 1rem;
  font-weight: semi-bold;
  cursor: pointer;
`;
export const ListRegisteredBtn = styled(ListRegisterBtn)`
  background-color: green;
`;
export const ListDeleteBtn = styled(ListRegisterBtn)`
  background-color: ${props => props.theme.redBtnColor};
`;
