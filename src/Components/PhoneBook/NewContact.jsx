import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PhoneBook.css';
import profile from '../Assets/profile.png';

const NewContact = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleAddContact = () => {
    if (name && phone) {
      const newContact = {
        id: Date.now(),
        name: name,
        phone: phone,
      };
  
      setContacts((prevContacts) => [...prevContacts, newContact]);
  
      navigate('/phonebook');
    } else {
      alert('Please fill in both Name and Phone fields.');
    }
  };
  

  return (
    <div className="NewContact">
      <img src={profile} alt="Person" className="Person" />
      <div>
      <input type="text" placeholder="Name" value={name || ''} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Phone" value={phone || ''} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button onClick={handleAddContact}>Add</button>
    </div>
  );
};

export default NewContact;
