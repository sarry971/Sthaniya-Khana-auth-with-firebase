function SignIn(){
    let email = document.getElementById('SignInEmail');
    let password = document.getElementById('SignInPassword');

    const signIn = auth.signInWithEmailAndPassword(email.value, password.value);

    signIn.then((value)=>{
        window.location.href = '/home.html';
        var user = value.user;
        alert('Hello '+user+'.');
    })
}