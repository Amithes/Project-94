const firebaseConfig = {
    apiKey: "AIzaSyC8rbAmIvjtsBibsd6qDrQJ5FPHlwHDsgY",
    authDomain: "letschat-2f3cb.firebaseapp.com",
    databaseURL: "https://letschat-2f3cb-default-rtdb.firebaseio.com",
    projectId: "letschat-2f3cb",
    storageBucket: "letschat-2f3cb.appspot.com",
    messagingSenderId: "431307118677",
    appId: "1:431307118677:web:fe181750b6ce6724d01cdc"
  };
  firebase.initializeApp(config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();