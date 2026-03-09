let newbtn= document.querySelector("#mode");
let curr="light";
newbtn.addEventListener("click", () => {
    if(curr==="light"){
        curr="dark";
        document.querySelector("h1").style.color="white";
        document.querySelector("p").style.color="white";
        document.querySelector("body").style.backgroundColor="black";
    } else{
        curr="light";
        document.querySelector("h1").style.color="black";
        document.querySelector("p").style.color="black";
        document.querySelector("body").style.backgroundColor="white";
    }
})



