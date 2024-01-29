// const form = document.querySelector('#form');
// const username = document.querySelector('#username');
// const Email = document.querySelector('#Email');
// const Password = document.querySelector('#password');
// const cpassword = document.querySelector('#cpassword');

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     ValidateInputs();
   
// })
// function ValidateInputs(){
//     const usernameVal = username.Value.trim();
//     const EmailVal = Email.Value.trim();
//     const PasswordVal = Password.Value.trim();
//     const cpasswordVal = cpassword.Value.trim();

//     if(usernameVal===''){
//         setError(username,'Username is required')
//     }
//     else{
//         setSuccess(username)
//     }

//     if(EmailVal===''){
//         setError(Email,'Email is required')
//     }
//     else if(!ValidateEmail(EmailVal)){
//     setError(Email,'Please Enter a Valid Email')
//     }
//     else{
//         setSuccess(Email)
//     }

//     if(passwordVal===''){
//         setError(Password,'password is required')
//     }
//     else if(passwordVal.length<8){
//         setError(Password,'Password must be atleast 8 character long')
//     }
//     else{
//         setSuccess(Password)
//     }

//     if(cpasswordVal===''){
//         setError(cpassword,'password is required')
//     }
//     else if(cpasswordVal!==PasswordVal){
//         setError(cpassword,'Password does not match')
//     }
//     else{
//         setSuccess(cpassword)
//     }

// }
// function setError(element,message){
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')
//     errorElement.innerText = message;
//     inputGroup.classList.add('error')
//     inputGroup.classList.remove('success')
// }
// function setSuccess(element){
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')
//     errorElement.innerText = '';
//     inputGroup.classList.add('success')
//     inputGroup.classList.remove('error')
// }
// const ValidateEmail=(Email)=>{
//     return String(Email)
//     .toLowerCase()
//     .match(
//         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//     );
// }

const form = document.querySelector('#form')
const username = document.querySelector('#username');
const Email = document.querySelector('#Email');
const Password = document.querySelector('#Password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = Email.value.trim();
    const passwordVal = Password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(Email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(Email,'Please enter a valid email')
    }
    else{
        setSuccess(Email)
    }

    if(passwordVal === ''){
        success= false;
        setError(Password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(Password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(Password)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    return success;

}
//element - password, msg- pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }; 