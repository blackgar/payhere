import { RepoData } from '@/types/repository';
import { repositoryListAtom } from '@atom';
import ListItem from '@molecules/ListItem';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { Title } from '@styles/common';

function RepoList() {
  const repositoryList = useRecoilValue(repositoryListAtom);
  return (
    <>
      {repositoryList.length === 0 ? (
        <Title size={'1.5rem'}>검색결과가 없습니다.</Title>
      ) : (
        repositoryList.map((v: RepoData, i: number) => <ListItem key={i} listData={v} />)
      )}
    </>
  );
}

export default RepoList;
