import { ListItemData } from '@/types/issue';
import {
  ListComments,
  ListItemWrapper,
  ListCreatedAt,
  ListImgWrapper,
  ListImg,
  ListItemContent,
  ListTitleWrapper,
  ListRepoName,
  ListUserName,
  ListNumberWrapper,
} from '@styles/repository';
import { getDate } from '@utils/getDate';

function IssueListItem({ listData }: ListItemData) {
  return (
    <ListItemWrapper style={{ cursor: 'pointer' }} onClick={() => window.open(listData.html_url)}>
      <ListImgWrapper>
        <ListImg src={listData.user.avatar_url} />
      </ListImgWrapper>
      <ListItemContent>
        <ListTitleWrapper>
          <ListRepoName>#{listData.number}</ListRepoName>
          <ListUserName>{listData.user.login}</ListUserName>
        </ListTitleWrapper>
        <ListNumberWrapper>
          <ListComments>comments : {listData.comments}</ListComments>
          <ListCreatedAt>{getDate(listData.created_at)}</ListCreatedAt>
        </ListNumberWrapper>
      </ListItemContent>
    </ListItemWrapper>
  );
}

export default IssueListItem;
