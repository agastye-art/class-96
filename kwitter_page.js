var firebaseConfig = {
      apiKey: "AIzaSyAAcCZTfxWajKEswzYGmNjYfv3qSaJMx6U",
      authDomain: "class-test-3edf6.firebaseapp.com",
      databaseURL: "https://class-test-3edf6-default-rtdb.firebaseio.com",
      projectId: "class-test-3edf6",
      storageBucket: "class-test-3edf6.appspot.com",
      messagingSenderId: "346491855621",
      appId: "1:346491855621:web:88acb668fdfab606ed4d6c",
      measurementId: "G-52X8KBR58N"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0 

          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
