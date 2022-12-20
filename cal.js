function cal(x){
    document.getElementById('show1').innerHTML +=x;
}
function percentage(){
    var per = document.getElementById('show1').innerHTML;
    var cent = per/100;
    // console.log(cent);
    document.getElementById('show2').innerHTML = cent;
}

function answer(){
    document.getElementById('show2').innerHTML = 
    eval(document.getElementById('show1').innerHTML)
}

function clr(){
    document.getElementById('show1').innerHTML='';
    document.getElementById('show2').innerHTML='';
}

function Del(){
    document.getElementById('show1').innerHTML=
    document.getElementById('show1').innerHTML.slice(0,-1)
    document.getElementById('show2').innerHTML=
    document.getElementById('show2').innerHTML.slice(0,-1)
}

