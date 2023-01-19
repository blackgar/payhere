import { GetRepositoryDataProps } from '@/types/props';
import { SearchBox, SearchBtn, SearchInput, SVG } from '@styles/search';
import { useState } from 'react';

function SearchBar({ getData }: GetRepositoryDataProps) {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    if (!inputValue) {
      alert('검색어를 입력해주세요!');
      return;
    }
    e.preventDefault();
    getData(`search/repositories?q=${inputValue}`);
    setInputValue('');
  };
  return (
    <SearchBox onSubmit={onSearch}>
      <SVG
        className="h-3.5 w-3.5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </SVG>
      <SearchInput type="text" value={inputValue} onChange={onInputChange} />
      <SearchBtn>검색</SearchBtn>
    </SearchBox>
  );
}

export default SearchBar;
