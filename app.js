const name1 = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const eror = document.getElementById("eror");

form.addEventListener("submit",(e) => {
    var mass = []

    if(name1.value === '' || name1.value == null){
        //mass.push('Sorry Not A Valid Name');
        mass.push('Hello You Have A problame In Your Name');
    }

    if(password.value.length <= 8){
        mass.push('Add More Carecter');
    }

    if(password.value == 'password'){
        mass.push("The Password Can't Be Password");
    }

    if(password.value.length >= 20){
        mass.push('Add Less Carecter');
    }

    if(mass.length > 0){
         e.preventDefault();
         eror.innerText = mass.join(" , ");
     }
});