    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");

document.getElementById("submit").addEventListener("click",function(event){
   event.preventDefault();

        if(username.value ==""){
           showError(username,"Username is required");
        }else{
           showSuccess(username);
        }
        

        if(email.value ==""){
            showError(email,"Email is required");
         }else if(!isValidEmail(email.value)){
            showError(email,"Email is not valid");
         }
         else{
            showSuccess(email);
         }

         
         if(pass1.value ==""){
            showError(pass1,"Password is required");
         }
         else{
            showSuccess(pass1);
         }

         if(pass2.value ==""){
            showError(pass2,"Confirm Password is required");
         }else if(pass1.value!==pass2.value){
            showError(pass2,"Password does not match");
         }
         else{
            showSuccess(pass2);
         }
 
});



   function showError(input,message){
    var parentBox =input.parentElement;
    parentBox.className = "input-field error";
    var span = parentBox.querySelector("span");
    span.innerText = message;
   }

   function showSuccess(u){
    var parentBox =u.parentElement;
    parentBox.className = "input-field success";
   }

   function isValidEmail(email){
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
   }