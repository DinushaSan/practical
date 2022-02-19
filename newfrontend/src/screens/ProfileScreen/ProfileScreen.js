import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../actions/userActions';
import ErrorMessage from '../../components/errorMessage';
import Loading from '../../components/Loading';
import Mainscreen from '../../components/Mainscreen'
import './ProfileScreen.css'

const ProfileScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
  
    const userUpdate = useSelector((state) => state.userUpdate);
    const { loading, error, success } = userUpdate;
    let navigate = useNavigate();
    useEffect(() => {
       
        if (!userInfo) {
          navigate("/");
        } else {
          setName(userInfo.name);
          setEmail(userInfo.email);
          setUsername(userInfo.username);
        }
      }, [navigate, userInfo]);

      const submitHandler = (e) => {
        e.preventDefault();
        if(password === confirmPassword)
            dispatch(updateProfile({ name, email, password, username}));
      };
  return (
    <Mainscreen title='MY PROFILE'>
        <div>
        <Row className="profileContainer">
          <Col md={12}>
            <Form onSubmit={submitHandler}>
              {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                value={name}
                 onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
                
              </Form.Group>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Username"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                ></Form.Control>
                </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                 onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
             
             <hr />
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
          </Col>
          
        </Row>
        </div>
    </Mainscreen>
  )
}

export default ProfileScreen