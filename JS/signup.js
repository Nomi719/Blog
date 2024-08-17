
// private routes not allowed navigation 
window.addEventListener("load", ()=>{
    if(localStorage.getItem("user")){
        window.location.href = "../index.html";
    }
})



import{createUserWithEmailAndPassword,auth,doc,setDoc,db } from "./firebase.js"

const fullname = document.getElementById("fullName")
const email = document.getElementById("email")
const password = document.getElementById("password")

const signUpHandler = async() =>{

    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email.value,password.value)
       
        const userObj = {
        
            fullname: fullname.value,
            email: email.value


       }
        const uid = userCredential.user.uid;

        // save your data on firestore

        const response = await setDoc(doc(db, "user", uid), userObj)
        console.log(response)
        alert("successfully signup")
        window.location.href = "../pages/login.html"

        
    } catch (error) {
        console.log(error.message)
        email.value = ""
        fullname.value = ""
        password.value = ""
        alert("Enter missing data")

        
    }
}
window.signUpHandler = signUpHandler