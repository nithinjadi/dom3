let color=document.getElementById("color")
let bRadius=document.getElementById("bRadius")
let img=document.querySelector("img")

function colorChange(z){

    if (z.key==="Enter"){
        document.body.style.background=color.value;
    }

}

function bRadiusChange(z){
    if (z.key==="Enter"){
        img.style.borderRadius=`${bRadius.value}px`
    }
}


let icon=document.querySelector("i");
icon.style.fontSize=50
icon.onclick=function(){
    if (icon.className==="fa-solid fa-sun"){
        icon.className="fa-solid fa-moon"
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
    }
    else{
        icon.className==="fa-solid fa-sun"
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
    }
}


let eyes=document.getElementById("eye");
let pass=document.getElementById("password");
eyes.onclick=function(){
    if (pass.type==="password"){
        eyes.className="fa-solid fa-eye"
        pass.type="text"
    }
    else{
        eyes.className="fa-solid fa-eye-slash"
        pass.type="password"
    }
}


let pswd=document.getElementById("password1");
let msg=document.querySelector("p");
function check(z){
    if (z.key==="Enter"){
        if (pswd.value.length<5){
            msg.textContent="weak password"
            msg.style.color="red"
        }
        else if(pswd.value.length>=5 && pswd.value.length<=10){
            msg.textContent="Good password"
            msg.style.color="orange"
        }
        else{
            msg.textContent="Strong password"
            msg.style.color="green"
        }
    }
}
