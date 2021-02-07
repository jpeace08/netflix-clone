import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { firebase } from '../lib/firebase.prod';

function useAuthListener({ user, setUser }) {
    const [userAuth, setuserAuth] = useState(user);
    useEffect(() => {
        const lisener = firebase.auth().onAuthStateChanged(userInfo => {
            if (userInfo) {
                setUser(userInfo);
                setuserAuth(userInfo);
            }
            else {
                setUser(null);
                setuserAuth(null);
            }
        })
        return () => {
            lisener();
        }
    }, [setUser]);

    return { userAuth };
}

const mapDispatch = dispatch => ({
    setUser: dispatch.auth.setUser,
})

const mapState = ({ auth }) => ({
    user: auth.user,
})

export default connect(mapState, mapDispatch)(useAuthListener);
