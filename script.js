var sizeSubmit = document.querySelector('.sizeSubmit');
const easelSize =document.querySelector('.easelSize');
const divGrid = document.getElementById('easel')
const div = document.createElement('div')

function makeEasel(){
  divGrid.innerHTML =''
    const easel = Number(easelSize.value);
    for (i = 0 ; i < easel ; i++){
      var row = document.createElement('row');

      for (var j = 0; j < easel; j++){
        const pixel =document.createElement('div');
        pixel.classList.add('pixel');
      row.appendChild(pixel);
      }
divGrid.appendChild(row)
}
function work(){
  var x =event.clientX,
    y=event.clientY,
  newColor = document.elementFromPoint(x,y);
  newColor.style.backgroundColor ='rgb(0, 0, 0)'

  console.log('clicked')
}

var pixels = document.querySelectorAll(".pixel").forEach((pixel) => {
  function random(number) {
  return Math.floor(Math.random() * (number+1));
}
  pixel.addEventListener('mouseenter',work)
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  pixel.style.backgroundColor = rndCol;


});

}
sizeSubmit.addEventListener('click', makeEasel)
