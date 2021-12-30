var mouseevent="empty";
canvas  =document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color=document.getElementById("color");
var radius=document.getElementById("radius");
var width=document.getElementById("width");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color= document.getElementById("color").value;
width=document.getElementById("width").value;
radius=document.getElementById("radius").value;
mouseevent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x=e.clientX=canvas.offsetLeft;
current_position_of_mouse_y=e.clientY=canvas.offsetTop;

if (mouseevent=="mouseDown") {
console.log("Current position of x and y coordiates=");
console.log("x ="+ current_position_of_mouse_x +"y="+ current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
ctx.stroke();
}}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseevent="mouseLeave";
}



















































































