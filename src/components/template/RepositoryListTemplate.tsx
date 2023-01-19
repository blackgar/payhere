import { GetRepositoryDataProps } from '@/types/props';
import SearchBar from '@molecules/SearchBar';
import List from '@organisms/List';
import { Container } from '@styles/common';

function RepositoryListTemplate({ getData, loading }: GetRepositoryDataProps) {
  return (
    <Container>
      <SearchBar getData={getData} />
      <List />
    </Container>
  );
}

export default RepositoryListTemplate;
