import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyD_BywNFF9Q3FbPxlKk2WL-ekwpTt523SI",
    authDomain: "noteherder-94eed.firebaseapp.com",
    databaseURL: "https://noteherder-94eed.firebaseio.com",
    projectId: "noteherder-94eed",
    storageBucket: "noteherder-94eed.appspot.com",
    messagingSenderId: "366965344746"
}
const app = firebase.initializeApp(config)

export const githubProvider = new firebase.auth.GithubAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth()

export default Rebase.createClass(app.database())