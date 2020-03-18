import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA6kUYEOpT_************_pNUDwCc",
  authDomain: "*********-******.firebaseapp.com",
  databaseURL: "https://*****-******.firebaseio.com",
  projectId: "*******-********",
  storageBucket: "********-*******.appspot.com",
  messagingSenderId: "***********",
  appId: "1:36********84:web:e2a4**************b85db5"
}

class FirebaseSvc {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      console.log("firebase apps already running...")
    }
  }
  
authTest=()=>{
  var user = firebase.auth().currentUser
  console.log(user+'...................')
}   
  emailVerify=(email)=>{
    var actionCodeSettings={
        url:'http://localhost:3000/landPage',//you have to add your desired that you want to send to user email to Authorized domains of you firebase sign-methods console.  
                                            //enter the url of homepage which you want to sent to user's email.
        handleCodeInApp: true,             //url can contail homepage or any page you want which can only be --
    }                                      //-- accessed if user click this url which you have sent to there email id.           

    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(function() {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', email);
            alert('email is been sent to your account')
        })
        .catch(function(error) {
            console.log(error)
            alert('failed....')
            // Some error occurred, you can inspect the code: error.code
        })

    }
}



const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;
