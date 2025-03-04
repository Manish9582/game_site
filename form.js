
let nameInt = document.querySelector('.nameInt');
let gendersel = document.querySelectorAll('.gendersel');
let ageInt = document.querySelector('.ageInt');
let dateInt = document.querySelector('.dateInt');
let emailInt = document.querySelector('.emailInt');
let passwordInt = document.querySelector('.passwordInt');

function checkEmail(){
    let emailInt2 = document.querySelector('.emailInt').value;
    console.log(emailInt2)
    let regexEmail=/@gmail.com/g;
    if(regexEmail.test(emailInt2)){
        console.log('Done')
    }else{
        console.log('fail')
    }
}
function checkPassword(){
    let passwordInt2 = document.querySelector('.passwordInt').value;
    console.log(passwordInt2)
    let regexpass=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/g;
    if(regexpass.test(passwordInt2)){
        console.log('Done')
    }else{
        console.log('fail')
    }
}
function selectGender(data) {
    gendersel.forEach(element => {
        element.checked = false;
    });
    gendersel.forEach(element => {
        if (element.value === data) {
            storGender=element.value;
            element.checked = true;
        }
    });
}
const DataFild = (e) => {
    e.preventDefault();
    const trimFun=(value)=>{
        return value.trim()
    }
    let name=trimFun(nameInt.value)
    let age=trimFun(ageInt.value)
    let dob=trimFun(dateInt.value)
    let email=trimFun(emailInt.value)
    let password=trimFun(passwordInt.value)

    const selectedGender = Array.from(gendersel).find(element => element.checked.value);
    let user=[{
        'name':name,
        'gender':selectedGender,
        'age':age,
        'dob':dob,
        'email':email,
        'password':password
    }];
    console.log(user)

    e.target.reset();
}

