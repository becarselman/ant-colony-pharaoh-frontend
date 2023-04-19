import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import LoginForm from './components/loginform/LoginForm.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import authService from "./service/authService";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

function App() {
  const isLoggedIn = authService.isLoggedIn(); // checks if the user is logged in


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirection from the home page to the login page */}
        <Route path="/login" element={<LoginForm />} />
        {/* This route will redirect all invalid routes to "/login*/}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
