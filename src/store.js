import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Configurar firestore.
const firebaseConfig = {
    apiKey: "AIzaSyCpa7kTyJXDDJu7m3Brsux5skilDNjdB2k",
    authDomain: "tianguis-48641.firebaseapp.com",
    databaseURL: "https://tianguis-48641.firebaseio.com",
    projectId: "tianguis-48641",
    storageBucket: "tianguis-48641.appspot.com",
    messagingSenderId: "546991009963",
    appId: "1:546991009963:web:7fcbc7ca2543a88f"

}

// Inicializar firebase
firebase.initializeApp(firebaseConfig);

// Configuración de React-Redux
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

// Crear el enhacer con compose de redux y firestore
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), 
    reduxFirestore(firebase)
)(createStore);

// Reducers
const rootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore: firestoreReducer
})

// state inicial
const initialState = {};

// Crear el store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;