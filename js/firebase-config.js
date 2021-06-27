
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCuKwCgifYEKCPE3clX4o4V6XCqYvb630c",
    authDomain: "sthaniya-khana.firebaseapp.com",
    projectId: "sthaniya-khana",
    storageBucket: "sthaniya-khana.appspot.com",
    messagingSenderId: "267429926743",
    appId: "1:267429926743:web:a8840c02bcbcb23627d012"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  function SignUp(){
      let email = document.getElementById('SignUpEmail');
      let password = document.getElementById('SignUpPassword');

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      
      promise.then((value)=>{
        var user = value.user;
        windows.location.href = '/index.html';
          alert("Sucess");
      })
      promise.catch((e) =>{
          alert(e.message);
      })
  }