//start firebase
const firebaseConfig = {
  apiKey: "AIzaSyAQftlEnjFKGpZk53deXjZ3P9UlhBr5YEo",
  authDomain: "tryon-efa87.firebaseapp.com",
  databaseURL: "https://tryon-efa87-default-rtdb.firebaseio.com",
  projectId: "tryon-efa87",
  storageBucket: "tryon-efa87.appspot.com",
  messagingSenderId: "336082813814",
  appId: "1:336082813814:web:8a87751e12eadfe029f057"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  
  //file upload(profile photo)
  const fileInput = document.querySelector('.account-settings-fileinput');
const uploadButton = document.querySelector('.btn-outline-primary');

uploadButton.addEventListener('click', function() {
  const file = fileInput.files[0];
  if (file) {
    const storageRef = storage.ref('profilePhotos/' + auth.currentUser.uid + '/profilePhoto.jpg');
    storageRef.put(file).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });
  }
});

//update profile info
const saveButton = document.querySelector('.btn-primary');
saveButton.addEventListener('click', function() {
  const username = document.querySelector('input[name="username"]').value;
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;

  db.collection('users').doc(auth.currentUser.uid).set({
    username: username,
    name: name,
    email: email
  }).then(() => {
    console.log("Document successfully written!");
  }).catch((error) => {
    console.error("Error writing document: ", error);
  });
});

//change password
const newPasswordInput = document.querySelector('input[name="new-password"]');

auth.currentUser.updatePassword(newPasswordInput.value).then(function() {
  console.log('Password updated successfully!');
}).catch(function(error) {
  console.log('An error happened.');
});



  
  