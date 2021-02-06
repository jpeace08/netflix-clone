import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import { Form } from '../components';
import { HeaderContainer, FooterContainer } from "../containers";
import * as ROUTES from '../constants/routes';

function Signin({ signin }) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInValid = email === "" || password === "";

    const handleSignin = e => {
        e.preventDefault();

        //firebase worke here!
        signin({ email, password })
            .then((data) => {
                console.log(data);
                history.push(ROUTES.BROWSE);
            })
            .catch(error => {
                setError(error.message);
                setEmail('');
                setPassword('');
            });
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && (
                        <Form.Error>
                            {error}
                        </Form.Error>
                    )}
                    <Form.Base onSubmit={handleSignin} method="POST">
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
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
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

const mapState = ({ auth }) => {
    return {

    }
}

const mapDispatch = dispatch => {
    return {
        signin: dispatch.auth.signin,
    }
}

export default connect(mapState, mapDispatch)(Signin);