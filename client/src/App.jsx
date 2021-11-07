import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register';
import Ticket from './pages/Ticket';

export default function App() {
  return (
    <React.Fragment>
      <Login />
      {/*<Register />*/} {/* components disabled, awaiting the creation of routes for navigation */}
      {/*<Ticket />*/}
    </React.Fragment>
  );
}