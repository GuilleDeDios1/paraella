function number(){
    var x = Math.round(Math.random()*100)
    while(x<20){
        var x = Math.round(Math.random()*100)
    }
    return x;
}
function signo(){
    var x = Math.round(Math.random()*100)
    if (x>50) {
        x = "-"
    }
    else{
        x = "+"
    }
    return x
}
document.getElementById("boton-no").addEventListener("click",function(){
    document.getElementById("boton-no").style = "position:relative";
    document.getElementById("boton-no").style.top = signo()+number()+"px";
    document.getElementById("boton-no").style.left = signo()+number()+"px";
    document.getElementById("boton-no").style.bottom = signo()+number()+"px";
    document.getElementById("boton-no").style.right = signo()+number()+"px";
    document.getElementById("parrafo").style = 'display:block';
})
document.getElementById("boton-si").addEventListener("click",function(){
    document.getElementById("parrafo").style = 'display:none';
    document.getElementById("boton-no").style = 'display:none';
    document.getElementById("mensaje").style = 'display:block';
})