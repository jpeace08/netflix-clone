import { firebase } from '../lib/firebase.prod';

const auth = {
    state: {
        user: null,
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
        }),
        setUser: (state, payload) => ({
            ...state,
            user: payload,
        }),
    },
    effects: (dispatch) => ({
        signin: ({ email, password }) => {
            return new Promise((resolve, reject) => {
                dispatch.auth.setLoading(true);
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(({ user }) => {
                        user.updateProfile({
                            displayName: email,
                            photoURL: Math.floor(Math.random() * 5) + 1,
                        })
                            .then(() => { resolve(user) })
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
                        user.updateProfile({
                            displayName: name,
                            photoURL: Math.floor(Math.random() * 5) + 1,
                        })
                        .then(() => {resolve(user)})
                    })
                    .catch(error => {
                        reject(error);
                    })
                    .finally(() => {
                        dispatch.auth.setLoading(false);
                    });
            })
        },
        signout: () => {
            firebase.auth().signOut()
                .then(() => { dispatch.auth.setUser(null) })
                .catch(err => {console.log(err.message);});
        }
    })
}

export default auth;