import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes ve BrowserRouter kullanın
import Login from './Components/Login/Login';
import PhoneBook from './Components/PhoneBook/PhoneBook';
import NewContact from './Components/PhoneBook/NewContact';

function App() {
  const handleAddContact = (newContact) => {
  };

  return (
    <Router>
      <Routes>
        <Route path="/phonebook/*" element={<PhoneBook />} />
        <Route path="/" element={<Login />} />
        <Route path="/NewContact" element={<NewContact onAddContact={handleAddContact} />} />
      </Routes>
    </Router>
  );
}

export default App;
