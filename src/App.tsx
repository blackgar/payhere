import RepositoryList from '@pages/RepositoryList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RepositoryList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
