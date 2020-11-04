const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry(0.5,32,32);
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const planet = new THREE.Mesh( geometry, material );
var starTexture = new THREE.TextureLoader().load("assets/img/stars/planet.jpg")
var stars = [];



camera.position.z = 5;

function doRandom() {
    var n = Math.floor(Math.random()*10)+1;
    n *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
    return n;
}

for(let i = 0; i < 300; i++)
{
    let geometry = new THREE.SphereGeometry(0.5,32,32);
  let material = new THREE.MeshBasicMaterial( { map: starTexture } );
  let star = new THREE.Mesh( geometry, material );
  star.position.set( doRandom(), doRandom(), doRandom() );
  star.material.side = THREE.DoubleSide;
  stars.push( star );
}

for (let j = 0; j < stars.length; j++){
    scene.add(stars[j]);
}

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    camera.rotation.x += 0.001;
    
}


animate();
