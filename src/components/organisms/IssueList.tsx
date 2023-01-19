import { issueListAtom } from '@atom';
import { useRecoilValue } from 'recoil';
function IssueList() {
  const issueList = useRecoilValue(issueListAtom);
  console.log(issueList);
  return <>IssueList</>;
}
export default IssueList;
