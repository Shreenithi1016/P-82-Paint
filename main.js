var mouseEvent="empty";
var last_x, last_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color= "black";
width_of_line=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown") {
        console.log("Current position of x and y coordinates= ");
        console.log("x=" + current_position_of_mouse_x + "y=" + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke;
    }

    if (mouseEvent=="mousedown") {
        
        console.log("current position of x and y coordinates=");
        console.log("x=" + current_x +", y=" + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_x, current_y, radius, 0, 2);
        ctx.stroke();
    }
}

function clear_canvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}