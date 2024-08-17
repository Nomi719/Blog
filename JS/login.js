
// private routes mean cant navigate from one page to another page
window.addEventListener("load", ()=>{
if(localStorage.setItem("user")){
    window.location.href = "../index.html";
}
})



import{signInWithEmailAndPassword,auth, } from "./firebase.js"

const email = document.getElementById("email")
const password = document.getElementById("password")

const loginHandler = async() =>{

    try {
        const userCredential = await signInWithEmailAndPassword(auth,email.value,password.value)
       
    
    // save your data on local storage using setitem
    const uid = userCredential.user.uid;

        console.log(uid)
        localStorage.setItem("user", uid)
        alert("successfully login ")
        window.location.href = "../index.html"

        
    } catch (error) {
        console.log(error.message)
        window.location.href = "./signup.html"
        alert("signup first")

        
    }
}
window.loginHandler = loginHandler