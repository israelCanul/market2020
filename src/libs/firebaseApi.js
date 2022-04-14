import firebase from "firebase/app";

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAdKhSDpqKCSs1Pca4i4Ps_RPX3X4wLkUA",
  authDomain: "royalmarket.firebaseapp.com",
  databaseURL: "https://royalmarket-default-rtdb.firebaseio.com",
  projectId: "royalmarket",
  storageBucket: "royalmarket.appspot.com",
  messagingSenderId: "725308466421",
  appId: "1:725308466421:web:8602fa811ec5a533e351bc",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database();

export function getDBConection() {
  return db;
}
