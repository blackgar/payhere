import { RepoData } from '@/types/repository';
import { issueListAtom, repositoryListAtom } from '@atom';
import { useRecoilValue } from 'recoil';
import { Title } from '@styles/common';
import RepoListItem from '@molecules/RepoListItem';
import { useLocation } from 'react-router-dom';
import { IssueListData } from '@/types/issue';
import IssueListItem from '@molecules/IssueListItem';

function List() {
  const { pathname } = useLocation();
  console.log(pathname);
  const repositoryList = useRecoilValue(repositoryListAtom);
  const issueList = useRecoilValue(issueListAtom);
  return (
    <>
      {pathname === '/' ? (
        repositoryList.length === 0 ? (
          <Title size={'1.5rem'}>검색결과가 없습니다.</Title>
        ) : (
          repositoryList.map((v: RepoData) => <RepoListItem key={v.id} listData={v} />)
        )
      ) : issueList.length === 0 ? (
        <Title size={'1.5rem'}>해당 레포지토리의 이슈가 없습니다.</Title>
      ) : (
        issueList.map((v: IssueListData) => <IssueListItem key={v.id} listData={v} />)
      )}
    </>
  );
}

export default List;
