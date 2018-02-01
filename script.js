startGame();

function startGame(){
  var play = confirm("Do you want to play?");
  if (play === true){
    var username = prompt("What is Your Name?");
    startCombat(username);
  }
}

function startCombat(username){
  var HP = 40;
  var xHP = 10;
  var xlives = 3;
  while (HP > 0){
    var damage = getDamage(3);
    HP -= damage;
    console.log(`Grant attacks and does ${damage} damage, ${username} HP is at ${HP}`);
    if (HP <= 0){
      console.log('GRANT HAS DEFEATED YOU!');
      break;
    } 
    
    var command = prompt(`Would like to “attack” or “run”`);
    if (command === "run"){
      console.log('You have successfully ran away!');
      break;
    }
    
    damage = getDamage(3);
    xHP -= damage;
    console.log(`${username} attacks Grant, it does ${damage} damage, his HP is at ${xHP}`);
    if (xHP <= 0 && xlives === 0){
      console.log('YOU HAVE DEFEATED GRANT!');
      break;
    }
    else if (xHP <= 0 ){
      xlives--;
      xHP = 10;
      console.log('GRANT HAS HEALED HIMSELF!');
    } 
    
  }
  console.log('GAME OVER')
  
}


function getDamage(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
