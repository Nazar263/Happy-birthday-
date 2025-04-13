const button = document.querySelector(".button_pris");
let x =100;
let y =100;
let dx = 2;
let dy = 2;
function animate() {
  const maxX = window.innerWidth-button.offsetWidth;
  const maxY = window.innerHeight-button.offsetHeight;
  x += dx;
  y += dy;
  if (x<=0 || x>= maxX) dx *= -1;
  if (y<=0 || y>=maxY) dy *= -1;
  button.style.left= x+"px";
  button.style.top= y+"px";
  requestAnimationFrame(animate);
}
animate();

function anim() {
  const box = document.getElementById("button_pris"); 
  box.classList.toggle("anim");
}

function anim2() {
  const box2 = document.getElementById("conteiner");
  box2.classList.toggle("cont");
}



function global_anim() {
  anim()
  anim2()
}


