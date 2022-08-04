import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Completed from './pages/Completed';
import Upcoming from './pages/Upcoming';
import History from './pages/History';
import Signup from './pages/Signup';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Completed />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/history" element={<History />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
