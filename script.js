let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password")
let submitBtn = document.getElementById("submit");
let messageRef = document.getElementById('message-ref');

let isUsernameValid = () => {
    /* Username should be contain more than 3 characters.
    Should begin with alphabetical character . 
    Can contains numbers */

    // Regular Expression concept are used here
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;

    // test is method in regular expression which check expressions are present or not
    return usernameRegex.test(usernameRef.value);
}


let isPasswordValid = () =>{
    /*Password should be atleast 8 characters long.
    should contain atleast 1 number , 1 special symbols,1 lower casae and 1 upper case */

    // Regular Expression concept are used here
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    // test is method in regular expression which check expressions are present or not
    return passwordRegex.test(passwordRef.value);
}

usernameRef.addEventListener('input',()=>{
    if (!isUsernameValid()){
        messageRef.style.visibility = "hidden";
        usernameRef.style.cssText =  "border-color: #fe2e2e; background-color: #ffc2c2";
    }else{
        usernameRef.style.cssText = "border-color:#34bd34; background-color:#c2ffc2"
    }
})

passwordRef.addEventListener("input",() => {
    if(!isPasswordValid()){
        messageRef.style.visibility = "hidden";
        passwordRef.style.cssText = "border-color:#fe2e2e; background-color:#ffc2c2"
    }else{
        passwordRef.style.cssText = "border-color:#34bd34; background-color:#c2ffc2"
    }
});


submitBtn.addEventListener("mouseover",() =>{
    // if either password or usename is invalid then do this...
    if(!isUsernameValid() || !isPasswordValid()){
        // Get the current position of submit btn
       
        let containerReact = document.querySelector(".container").getBoundingClientRect();   // The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
        
        let submitReact = submitBtn.getBoundingClientRect();
        let offset = submitReact.left - containerReact.left; 

        console.log(offset);

        //if the button is on the left hand side... move it to the right hand side
        if(offset <= 100){
            submitBtn.style.transform = 'translateX(16.25em)'
        }else{
            submitBtn.style.transform = 'translateX(0)'
        }
    }
})

submitBtn.addEventListener("click",()=>{
    messageRef.style.visibility = "visible";
})
