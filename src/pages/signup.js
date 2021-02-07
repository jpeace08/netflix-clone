import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from '../components';
import { HeaderContainer, FooterContainer } from "../containers";
import * as ROUTES from '../constants/routes';

function Signup({loading, signup}) {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const isInValid = email === "" || password === "" || name === "" || confirmPassword === "" || password !== confirmPassword;
    
    const handleSignup = e => {
        e.preventDefault();

        //firebase work here!
        if (!isInValid) {
            signup({name, email, password, confirmPassword})
                .then((user) => {
                    history.push(ROUTES.BROWSE);
                })
                .catch(error => { 
                    console.error(error);
                    setName('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                    setError(error.message);
                });
        }
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && (
                        <Form.Error>
                            {error}
                        </Form.Error>
                    )}
                    {loading && (
                        <Form.TextSmall>Loading...</Form.TextSmall>
                    )}
                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="Your name"
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            autoComplete="off"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            autoComplete="off"
                            onChange={({ target }) => setConfirmPassword(target.value)}
                        />
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign Up
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
};

const mapState = ({ auth }) => ({
    loading: auth.loading,
});

const mapDispatch = dispatch => ({
    signup: dispatch.auth.signup,
})

export default connect(mapState, mapDispatch)(Signup);