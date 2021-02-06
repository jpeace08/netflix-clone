import { firebase } from '../lib/firebase.prod';

const auth = {
    state: {
        user: {},
        loading: false,
    },
    reducers: {

    },
    effects: (dispatch) => ({
        signin: ({email, password}) => {
            return new Promise((resolve, reject) => {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(data => {
                        resolve(data);
                    }).catch(error => {
                        reject(error);
                    })
            });
        }
    })
}

export default auth;