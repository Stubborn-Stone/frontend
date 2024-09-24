//let h1 = hello world!
let changeH1Content=document.querySelector("h1");
changeH1Content.textContent= "Hello World!";

//change Image
let myImage=document.querySelector("img");
myImage.onclick=function(){
    let mySrc=myImage.getAttribute("src");
    if (mySrc === "./images/test.jpg"){
        myImage.setAttribute("src","./images/firefox.svg");
    }else{
        myImage.setAttribute("src","./images/test.jpg");
    }
};

//setUserName
let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");
function setUserName(){
    let myName=prompt("Enter your Name");
    if (!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent="Mozilla 酷毙了，" + myName;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
}else{
    let storeName=localStorage.getItem("name");
    myHeading.textContent="Mozilla 酷毙了，"+ storeName;
}

myButton.onclick=function(){
    setUserName();
};