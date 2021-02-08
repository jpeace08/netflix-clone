import { useEffect, useState } from 'react';
import { firebase } from '../lib/firebase.prod';

function useAuthListener() {
    const [userAuth, setuserAuth] = useState(null);
    useEffect(() => {
        const lisener = firebase.auth().onAuthStateChanged(userInfo => {
            if (userInfo) {
                setuserAuth(userInfo);
            }
            else {
                setuserAuth(null);
            }
        })
        return () => {
            lisener();
        }
    }, []);

    return { userAuth };
}

export default useAuthListener;
