import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Events from './pages/Events';
import Join from './pages/Join';
import Contact from './pages/Contact';
import Gallery from "./dashboard/Gallery";
import Alumni from "./pages/Alumni";
import Library from './dashboard/Library';
import Testimonials from './dashboard/Testimonials';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './dashboard/Profile';
import ChangePassword from './dashboard/ChangePassword';

function AppWrapper() {
  const location = useLocation();

  // Hide Navbar for any route that starts with '/dashboard'
  const hideNavbar = location.pathname.startsWith('/dashboard/') || location.pathname.startsWith('/login');

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />

        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="library" />} /> {/* 👈 Default route */}
          <Route path="library" element={<Library />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="events" element={<Events />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="profile" element={<Profile />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
        </Route>
      </Routes>
      {!hideNavbar && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
