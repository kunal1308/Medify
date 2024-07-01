import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import LandingPage from './pages/Landing_Page/LandingPage';
import SearchResultsPage from './pages/SearchResults_Page/SearchResultsPage';
import BookingsPage from './pages/Bookings_Page/BookingsPage';

export const config = {
  endpoint: 'https://meddata-backend.onrender.com'
}

function App() {
  return (
    <div className='app'>
      <p className='heading'>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness</p>
      <Router>
      <Routes>
        <Route path="/data" element={<SearchResultsPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/" element={<LandingPage />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
