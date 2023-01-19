import { IssueListData } from '@/types/issue';
import { ListData, registeredRepoData, RepoData } from '@/types/repository';
import { issueListAtom, registerRepoListAtom } from '@atom';
import useMutation from '@hooks/useMutation';
import {
  ListImg,
  ListImgWrapper,
  ListItemWrapper,
  ListTitleWrapper,
  ListNumberWrapper,
  ListComments,
  ListCreatedAt,
  ListItemContent,
  ListRepoName,
  ListUserName,
  ListDescription,
  ListRegisterWrapper,
  ListRegisterBtn,
  ListDeleteBtn,
  ListRegisteredBtn,
} from '@styles/repository';
import { getDate } from '@utils/getDate';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

function RepoListItem({ listData }: ListData) {
  const [userName, repoName] = listData.full_name.split('/');
  const [registerRepoList, setRegisterRepoList] = useRecoilState(registerRepoListAtom);
  const [issueList, setIssueList] = useRecoilState(issueListAtom);
  const [getIssueData, { data, loading }] = useMutation();

  const onRegister = () => {
    if (registerRepoList.length > 3) {
      alert('최대 4개의 레포지토리를 저장할 수 있습니다. 레포지토리를 삭제 후 등록해주세요.');
      return;
    }
    if (!registerRepoList.includes(listData.id)) {
      setRegisterRepoList((prev: registeredRepoData[]) => [
        ...prev,
        { id: listData.id, html_url: listData.html_url, userName, repoName },
      ]);
      getIssueData(`repos/${userName}/${repoName}/issues`);
    }
  };

  const onDelete = () => {
    if (registerRepoList.length === 0) return;
    const newData = registerRepoList.filter((v: registeredRepoData) => v.id !== listData.id);
    setRegisterRepoList(newData);
    const deleteData = [...issueList].filter(
      (v: IssueListData) => !v.html_url.includes(listData.html_url)
    );
    setIssueList(deleteData);
  };

  useEffect(() => {
    if (data) {
      const newData = [...issueList];
      data.forEach((v: IssueListData) => newData.push(v));
      setIssueList(newData);
    }
  }, [data]);

  return (
    <ListItemWrapper>
      <ListImgWrapper>
        <ListImg src={listData.owner.avatar_url} />
      </ListImgWrapper>
      <ListItemContent>
        <ListTitleWrapper>
          <ListRepoName>{userName}</ListRepoName>
          <ListDescription>{listData.description}</ListDescription>
          <ListUserName>{repoName}</ListUserName>
        </ListTitleWrapper>
        <ListNumberWrapper>
          <ListComments>⭐️ {listData.stargazers_count}</ListComments>
          <ListCreatedAt>{getDate(listData.created_at)}</ListCreatedAt>
        </ListNumberWrapper>
        <ListRegisterWrapper>
          {registerRepoList.some((v: registeredRepoData) => v.id === listData.id) ? (
            <>
              <ListRegisteredBtn>등록됨</ListRegisteredBtn>
              <ListDeleteBtn onClick={onDelete}>삭제</ListDeleteBtn>
            </>
          ) : (
            <ListRegisterBtn onClick={onRegister}>등록</ListRegisterBtn>
          )}
        </ListRegisterWrapper>
      </ListItemContent>
    </ListItemWrapper>
  );
}

export default RepoListItem;
