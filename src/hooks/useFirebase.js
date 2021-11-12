import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile,  signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

initializeFirebaseAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, histroy) => {
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const newUser = {email, displayName: name};
    setUser(newUser);
    // Signed in 
    setAuthError('');
    //save user to database
    saveUser(email, name, 'POST')

    //send data to firebase
    const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName: name
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});

    histroy.replace('/')

  })
  .catch((error) => {
    setAuthError(error.message);
    // ..
  })
  
  .finally( () => setIsLoading(false));
    };

    const logIn = (email, password, location, histroy) => {
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential)
    const destination = location?.state?.from || '/';
    histroy.replace(destination);
    setAuthError('');

  })
  .catch((error) => {
    setAuthError(error.message);
  })
  // .finally( () => setIsLoading(false));
    }


    const signWithGoogle = (location, histroy) => {
      setIsLoading(true);
      signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT')
        setAuthError('')
        // ...
        const destination = location?.state?.from || '/';
        histroy.push(destination);
      }).catch((error) => {
        // const error = error.message;
        setAuthError(error.message);
      })
      .finally( () => setIsLoading(false));
    }

    //observer user state
    useEffect( () => {
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              // ...
            } else {
              // User is signed out
              setUser({})
            }
            setIsLoading(false)
          })
          
          return () => unsubscribe;
    } , [auth]);

    //dependacy
    
    useEffect(  () => {
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res=> res.json())
      .then(data=> setAdmin(data.admin))
    }, [user.email])
 
    const logOut = () => {
      setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally( () => setIsLoading(false));
    };
    const saveUser = (email,displayName, method)=> {
        const user = {email, displayName};
        fetch('http://localhost:5000/users', {
          method: method,
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
        .then()
    }

    return { 
        user,
        registerUser,
        isLoading,
        authError,
        logIn,
        signWithGoogle,
        logOut,
        admin
    }
}

export default useFirebase;