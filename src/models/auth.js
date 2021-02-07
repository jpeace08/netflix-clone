import { firebase } from '../lib/firebase.prod';

const auth = {
    state: {
        user: {},
        loading: false,
        error: null,
    },
    reducers: {
        setLoading: (state, payload) => ({
            ...state,
            loading: payload,
        }),
        setError: (state, payload) => ({
            ...state,
            error: payload,
        })
    },
    effects: (dispatch) => ({
        signin: ({ email, password }) => {
            return new Promise((resolve, reject) => {
                dispatch.auth.setLoading(true);
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(({user}) => {
                        resolve(user);
                    }).catch(error => {
                        reject(error);
                    })
                    .finally(() => { dispatch.auth.setLoading(false) });
            });
        },
        signup: ({name, email, password, confirmPassword}) => {
            console.log(name, email, password, confirmPassword);
            return new Promise((resolve, reject) => {
                dispatch.auth.setLoading(true);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(({ user }) => {
                        resolve(user);
                    })
                    .catch(error => {
                        reject(error);
                    })
                    .finally(() => {
                        dispatch.auth.setLoading(false);
                    });
            })
        }
    })
}

export default auth;