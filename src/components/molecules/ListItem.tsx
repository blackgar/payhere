import { ListData, RepoData } from '@/types/repository';
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
} from '@styles/repository';
import { getDate } from '@utils/getDate';

function ListItem({ listData }: ListData) {
  return (
    <ListItemWrapper>
      <ListImgWrapper>
        <ListImg src={listData.owner.avatar_url} />
      </ListImgWrapper>
      <ListItemContent>
        <ListTitleWrapper>
          <ListRepoName>{listData.full_name.split('/')[1]}</ListRepoName>
          <ListDescription>{listData.description}</ListDescription>
          <ListUserName>{listData.full_name.split('/')[0]}</ListUserName>
        </ListTitleWrapper>
        <ListNumberWrapper>
          <ListComments>⭐️ {listData.stargazers_count}</ListComments>
          <ListCreatedAt>{getDate(listData.created_at)}</ListCreatedAt>
        </ListNumberWrapper>
      </ListItemContent>
    </ListItemWrapper>
  );
}

export default ListItem;
