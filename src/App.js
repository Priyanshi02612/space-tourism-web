import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import './App.css';
import { AppLayout, Crew, Destination, Home, Technology } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
