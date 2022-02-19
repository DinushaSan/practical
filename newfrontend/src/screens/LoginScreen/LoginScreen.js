
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate, useNavigationType } from 'react-router-dom'
import { login } from '../../actions/userActions'
import ErrorMessage from '../../components/errorMessage'
import Loading from '../../components/Loading'
import Mainscreen from '../../components/Mainscreen'
import './LoginScreen.css'


const LoginScreen = ({history}) => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

   const dispatch = useDispatch();
   const userLogin = useSelector((state) => state.userLogin);
   const {loading, error, userInfo } = userLogin;
  let navigate = useNavigate();
   useEffect(() => {
    
     if(userInfo){
      navigate('/profile');
     }
   
    
   }, [navigate, userInfo])
   
    const submitHandler = async (e)=> {
        e.preventDefault();
        dispatch(login(email, password));
    }
  return (
    <Mainscreen title='LOGIN'>
             <div className="loginContainer">
                 {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                 {loading && <Loading/>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
             onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        <hr/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </Mainscreen>
  )
}

export default LoginScreen