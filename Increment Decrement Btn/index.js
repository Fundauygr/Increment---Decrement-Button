const decreasebtn = document.getElementById("btn1");
const resetbuton = document.getElementById("btn2");
const increasebtn = document.getElementById("btn3");
const Label1 = document.getElementById("Label1");
let count = 0;

increasebtn.onclick = function () {
    count++;
    Label1.textContent = count;
}

decreasebtn.onclick = function () {
    count--;
    Label1.textContent = count;
}

resetbuton.onclick = function(){
    count=0;
    Label1.textContent=count;
}
