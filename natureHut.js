function show(){
    let nav=document.getElementById("nav");
    
    if(!(nav.classList.contains("show"))){
        nav.classList.add("show");
    }
}
function hideNav(){
    let nav=document.getElementById("nav");

    if(nav.classList.contains("show")){
        nav.classList.remove("show");
    }
}