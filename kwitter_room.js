
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  document.getElementById("user_name").innerHTML="Welcome"+user_name;

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding user name "

    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("ROOM NAME: "+ Room_names);
row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
  
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
  
}
