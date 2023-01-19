import { repositoryListAtom } from '@atom';
import useMutation from '@hooks/useMutation';
import RepositoryListTemplate from '@template/RepositoryListTemplate';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

function RepositoryList() {
  const [repositoryList, setRepositoryList] = useRecoilState(repositoryListAtom);
  const [getData, { data, loading }] = useMutation();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      setRepositoryList(data);
    }
  }, [data]);

  return (
    <>
      <RepositoryListTemplate getData={getData} loading={loading} />
    </>
  );
}

export default RepositoryList;
