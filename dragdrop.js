let isdd = false;
let locat = {
  x: 0,
  y: 0,
};

nav.addEventListener("mousedown", (e) => {
  if (e.target.matches("a")) {
    isdd = true;
    console.log(e);
    locat.x = e.clientX;
    locat.y = e.clientY;
  }
});

// nav.addEventListener("mouseup", (e) => {
//   if (e.target.matches("a")) {
//     isdd = false;
//     locat.x = e.clientX;
//     locat.y = e.clientY;
//   }
// });

nav.addEventListener("mousemove", (e) => {
  if (e.target.matches("a") && isdd) {
    let x = e.clientX - locat.x;
    let y = e.clientY - locat.y;
    e.target.style.transform = `translate(${x}px,${y}px)`;
  }
});
