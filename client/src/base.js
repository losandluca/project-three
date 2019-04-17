import Rebase from 're-base'

import * as firebase from 'firebase'



var config = {
    apiKey: "AIzaSyAPfRZD_rwtx1AOKjpWbfXv006siB4EqYc",
    authDomain: "friend-zone-20df1.firebaseapp.com",
    databaseURL: "https://friend-zone-20df1.firebaseio.com",
    projectId: "friend-zone-20df1",
    storageBucket: "friend-zone-20df1.appspot.com",
    messagingSenderId: "450313547301"
 };

// firebase.initializeApp(config)

const firebaseApp = firebase.initializeApp(config)
const databaseBase = Rebase.createClass(firebaseApp.database())

export {databaseBase,firebase}