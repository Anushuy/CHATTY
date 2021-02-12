
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDDZTteC64ATdQUAhutkWMmfy8_HgXB1u4",
      authDomain: "kwitter-19oftyg.firebaseapp.com",
      databaseURL: "https://kwitter-19oftyg-default-rtdb.firebaseio.com",
      projectId: "kwitter-19oftyg",
      storageBucket: "kwitter-19oftyg.appspot.com",
      messagingSenderId: "381998201567",
      appId: "1:381998201567:web:688e606dfb7f948258476a",
      measurementId: "G-KHVXQYLH8B"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";
    function adroom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location=kwitter_page.html;
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - "+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location(kwitter_page.html)
}