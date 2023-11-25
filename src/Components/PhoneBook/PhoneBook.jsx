import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './PhoneBook.css';
import profile from '../Assets/profile.png';
import search from '../Assets/view.png';
import NewContact from './NewContact';

function PhoneBook() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210' },
  ]);

  const [editingContact, setEditingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (id) => {
    setEditingContact(id);
  };

  const handleCancelEdit = () => {
    setEditingContact(null);
  };

  const handleSave = (id, newName, newPhone) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === id ? { ...contact, name: newName, phone: newPhone } : contact
      )
    );
    setEditingContact(null);
  };

  const handleRemove = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    setEditingContact(null);
  };

  const NewContact = ({ onAddContact }) => {
    console.log('New Contact:', newContact);
    const originalContacts = [...contacts];
    setContacts([...originalContacts, newContact]);
  };
  
  const handleFind = () => {
    const filteredContacts = searchTerm
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : contacts;  
  
    setContacts([...filteredContacts]);
  };
  

  return (
    <div className="App">
      <div className="Sidebar">
        <div className="SidebarHeader">
          <h2>Main Menu</h2>
        </div>
        <div className="SearchBox">
          <div className="input">
            <img src={search} alt="" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="SidebarButtons">
          <button className="SidebarButtons" onClick={handleFind}>
            Find
          </button>
        </div>
        <div className="SidebarButtons">
          <Link className="SidebarButtons" to="/NewContact">
            <button>New Contact</button>
          </Link>
        </div>
      </div>
      <div className="MainContent">
        <Routes>
          <Route
            path="/NewContact"
            element={<NewContact onAddContact={handleAddContact} />}
          />
          <Route
            path="/"
            element={
              <>
                {contacts.map((contact) => (
                  <div key={contact.id} className="PersonCard">
                    <img src={profile} alt="Person" />
                    <div>
                      <div>
                        {editingContact === contact.id ? (
                          <div>
                            <input
                              type="text"
                              value={contact.name}
                              onChange={(e) =>
                                setContacts((prevContacts) =>
                                  prevContacts.map((c) =>
                                    c.id === contact.id ? { ...c, name: e.target.value } : c
                                  )
                                )
                              }
                            />
                            <input
                              type="text"
                              value={contact.phone}
                              onChange={(e) =>
                                setContacts((prevContacts) =>
                                  prevContacts.map((c) =>
                                    c.id === contact.id ? { ...c, phone: e.target.value } : c
                                  )
                                )
                              }
                            />
                          </div>
                        ) : (
                          <div>
                            <h3>{contact.name}</h3>
                            <p>{contact.phone}</p>
                          </div>
                        )}
                      </div>
                      <div className="ButtonGroup">
                        {editingContact === contact.id ? (
                          <>
                            <button onClick={() => handleSave(contact.id, contact.name, contact.phone)}>
                              Save
                            </button>
                            <button onClick={handleCancelEdit}>Cancel</button>
                          </>
                        ) : (
                          <>
                            <button onClick={() => handleEdit(contact.id)}>Edit</button>
                            <button onClick={() => handleRemove(contact.id)}>Remove</button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default PhoneBook;