import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div className="mc-menu">
      <div className="mc-button full">
        <Nav.Link as={Link} to="/SignIn" className="title">
          Login
        </Nav.Link>
      </div>
      <div className="mc-button full">
        <Nav.Link as={Link} to="/SignUp" className="title">
          SignUp
        </Nav.Link>
      </div>
      <div className="mc-button full">
        <Nav.Link href="http://localhost:3001/app/auth" className="title">
          Login with 42
        </Nav.Link>
      </div>
    </div>
  );
};

export default Search;
