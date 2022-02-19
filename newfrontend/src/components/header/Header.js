import React from 'react'
import {Navbar, Nav, NavDropdown, FormControl, Form, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { logout } from '../../actions/userActions';
const Header = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  const logoutHandler=()=> {
    dispatch(logout());
   navigate('/');
  }
  return (
<Navbar bg="primary" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand><Link to='/'>Practical-Test</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav className='m-auto'>
        <Form className="d-flex">
       
      </Form>
        </Nav>
      {userInfo? <Nav
        className=""
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        
        <NavDropdown title={userInfo?.username} id="navbarScrollingDropdown">
          <NavDropdown.Item onClick={logoutHandler}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>:<Nav>
      <Nav.Link href="/login"> <Link to = '/login'>Login</Link></Nav.Link>
        </Nav>}
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Header