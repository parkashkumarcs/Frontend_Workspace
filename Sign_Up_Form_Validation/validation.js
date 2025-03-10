var pass1;
var pass2;
var upCase = document.getElementById('uppercase');
var loCase = document.getElementById('lowercase');
var specialCh = document.getElementById('special');
var confirm = document.getElementById('confirm');
var num = document.getElementById('numb');
const case1 = /[A-Z]/;
const case2 = /[a-z]/;
const case3 = /[0-9]/;
const case4 = /[!@#$%^&*(),.?":{}|<>]/;
function validPass1(val1){
    // alert(val1.value); // working properly
    pass1 = val1.value;
    let check1 = case1.test(pass1)
    let check2 = case2.test(pass1)
    let check3 = case3.test(pass1)
    let check4 = case4.test(pass1)
    // alert(pass1.length);
    if(check1){
        upCase.innerText = '✅ valid uppercase';
        upCase.style.color = 'green';
    }
    else{
        upCase.innerText = '❌ Atleast 1 uppercase';
        upCase.style.color = '';
    }
    if(check2){
        loCase.innerText = '✅ valid lowercase';
        loCase.style.color = 'green';
    }
    else{
        loCase.innerText = '❌ Atleast 1 lowercase';
        loCase.style.color = '';
    }
    if(check4){
        specialCh.innerText = '✅ valid special';
        specialCh.style.color = 'green';
    }
    else{
        specialCh.innerText = '❌ Atleast 1 special ch';
        specialCh.style.color = '';
    }
    if(check3){
        num.innerText = '✅ valid number';
        num.style.color = 'green';
    }
    else{
        num.innerText = '❌ Atleast 1 number';
        num.style.color = '';
    }
    if(pass1.length === 0){
        upCase.innerText = '';
        loCase.innerText = '';
        specialCh.innerText = '';
        num.innerText = '';
    }

}
function validPass2(val2){
    // alert(val2.value); // this is also working properly
    pass2 = val2.value;
    
    if(pass2 === pass1){
        confirm.innerText = 'password matched!';
        confirm.style.color = 'green';
    }
    else{
        confirm.innerText = "password doen't matched!";
        confirm.style.color = 'red';
    }
    if(pass2.length === 0){
        confirm.innerText = "";
    }
}