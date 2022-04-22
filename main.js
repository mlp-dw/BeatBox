function playSound(e){
  if (e.keyCode == 32) {
    beatBox()
    return
  }
  console.log(e)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return; //empêche le code de tourner pour toutes les touches
    audio.currentTime = 0; //retour du son au début quand je réappuie sur la touche
    audio.play();
    key.classList.add('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition)
});



function removeTransition(e) {
    if(e.propertyName = 'transform'){
        this.classList.remove('playing');
    }
}

window.addEventListener("keydown", playSound);  


// =========================================================================================================================
// =========================================================================================================================
// =========================================================================================================================
// =========================================================================================================================
function simulateKey(keycode) {
  let event = new KeyboardEvent('keydown',{
    keyCode: keycode
  });
  window.dispatchEvent(event)
}

function playBeat(keycode, time = 500) {    
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(simulateKey(keycode));
    }, time);
  });
}

async function beatBox() {
  console.log('en attente');
  await playBeat(83, 100);
  await playBeat(83, 100);
  await playBeat(83, 100);
  await playBeat(83, 100);
  await playBeat(83, 100);
  await playBeat(83, 100);
  await playBeat(88, 200);
  await playBeat(69);  
  await playBeat(65);
  await playBeat(69);
  await playBeat(88);
}      

// 65 clap    90 hihat      81 openhat      83 boom        87 snare     68 ride       88 tom           67 tink




simulateKey()



/* la fonction beatBox() se déclenche quand on appuie sur un nouveau bouton. elle contient 2 fonctions :
○ une fonction simulateKey() qui simule la pression d'une touche
de clavier (ce qui permet de déclencher le code de votre drumpad déjà fait)*/


// function beatBox(){
//   console.log("beat")
//  function simulateKey(keyCode){
//     let evt = new KeyboardEvent('keydown', { 'keyCode': keyCode });
//     window.dispatchEvent(evt);
//     console.log('hello world')
//  }
  
//   function playBeat(keyCode,delay=500){
//     console.log("fuckthatshit")
//     return new Promise(function(resolve) {
//       setTimeout(()=>resolve(simulateKey(keyCode)),delay);
//       })

//   }
//   playBeat(65).then(()=>{
//     playBeat(67)
//   }).then(()=>{
//     playBeat(90, 1000)
//   })
// }




// async function playBeat() {
//     let myPromise = new Promise(function(resolve) {
//       setTimeout(function() {resolve(playSound);}, 3000);
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   playBeat();