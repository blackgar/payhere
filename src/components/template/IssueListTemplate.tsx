import { issueListAtom } from '@atom';
import List from '@organisms/List';
import { Container, Title } from '@styles/common';
import { useRecoilValue } from 'recoil';
function IssueListTemplate() {
  const issueList = useRecoilValue(issueListAtom);
  // console.log(issueList);
  return (
    <Container len={issueList !== undefined ? issueList.length : 0}>
      <Title size={'2.5rem'}>이슈리스트</Title>
      <List />
    </Container>
  );
}

export default IssueListTemplate;
