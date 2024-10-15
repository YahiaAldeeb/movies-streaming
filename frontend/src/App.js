import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './Components/Header/Header';
import AllMovies from './pages/AllMovies/AllMovies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import SignUp from './pages/SignUp/SignUp';
import Comedy from './pages/genre/Comedy'
import Drama from './pages/genre/Drama'
import Romance from './pages/genre/Romance'
import Action from './pages/genre/Action'
import LoginPleasePage from './pages/LoginPlease/LoginPlease'

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loginPlease" element={<LoginPleasePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/AllMovies" element={<AllMovies />} />
          <Route path="/genre/comedy" element={<Comedy />} />
          <Route path="/genre/romance" element={<Romance />} />
          <Route path="/genre/action" element={<Action />} />
          <Route path="/genre/drama" element={<Drama/>} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
