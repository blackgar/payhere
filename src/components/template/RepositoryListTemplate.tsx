import { GetRepositoryDataProps } from '@/types/props';
import { repositoryListAtom } from '@atom';
import SearchBar from '@molecules/SearchBar';
import List from '@organisms/List';
import { Container, Title } from '@styles/common';
import { useRecoilValue } from 'recoil';

function RepositoryListTemplate({ getData, loading }: GetRepositoryDataProps) {
  const repositoryList = useRecoilValue(repositoryListAtom);

  return (
    <Container len={repositoryList !== undefined && !loading ? repositoryList.length : 0}>
      <Title size={'2.5rem'}>
        {repositoryList.length === 0 ? '레포지토리를 검색해보세요.' : '레포지토리 검색결과'}
      </Title>
      <SearchBar getData={getData} />
      {loading ? <>Loading...</> : <List />}
    </Container>
  );
}

export default RepositoryListTemplate;
