import { HeaderTitle, HeaderWrapper } from '@styles/header';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/repositories">
        <HeaderTitle>검색</HeaderTitle>
      </Link>
      <Link to="/issues">
        <HeaderTitle>이슈리스트</HeaderTitle>
      </Link>
    </HeaderWrapper>
  );
}

export default Header;
