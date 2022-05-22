var bodyback =  document.getElementById('bodyBack');












const images2 = [
    "img/baCK1.png",
    "img/back2.png",
    "img/back3.png"
]
const gird = document.querySelector('.grid_container')
const imagechosen = images2[Math.floor(Math.random()*images2.length)];

console.log(imagechosen);



BGimage = `url(${imagechosen})`;

console.log(BGimage)

bodyback.style.backgroundImage = BGimage

