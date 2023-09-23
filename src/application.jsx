import { Routes, Route } from 'react-router-dom';

import { AppLayout } from './layout/appLayout';
import { Home } from './pages/home';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={'/'} element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
