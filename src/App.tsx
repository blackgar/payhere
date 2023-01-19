import Header from '@organisms/Header';
import IssueList from '@pages/IssueList';
import RepositoryList from '@pages/RepositoryList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/issues" element={<IssueList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
