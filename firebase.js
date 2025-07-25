// Firebase JS SDK setup
const firebaseConfig = {
  apiKey: "AIzaSyB8xoQAsqolJ7gWhQe48wrsy7QloqDCZXI",
  authDomain: "adseada-3c48e.firebaseapp.com",
  databaseURL: "https://adseada-3c48e-default-rtdb.firebaseio.com",
  projectId: "adseada-3c48e",
  storageBucket: "adseada-3c48e.appspot.com",
  messagingSenderId: "619285586788",
  appId: "1:619285586788:web:4039abb049df74deb15071"
};

firebase.initializeApp(firebaseConfig);

function addCoins(uid, n) {
  const ref = firebase.database().ref("users/" + uid + "/coins");
  ref.once("value", snapshot => {
    const current = snapshot.val() || 0;
    ref.set(current + n);
  });
}
