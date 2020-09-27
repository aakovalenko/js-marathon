const character = {
	name: 'Pikachu',
	hp: 100,
	kick: function () { console.log("Kick ME !");}
};


console.log(character.name);
console.log(character['hp']);

const count = 100;
console.log(character[count]);

character.power =  'electro';

character.hp -= 20;

delete character.power;

character.kick();

console.log(character);



/* Arrays */

const message = ['Hello', true, 2343];

console.log(message);
console.log(message[0]);

message.push('World');
console.log(message);

/* DOM */


const $box = document.getElementById('box');
console.log($box.innerText = 'Єто див с ид бох');

$box.style.width = '500px';
$box.style.backgroundColor = 'green';

$box.addEventListener('click',  function () {
	alert('tu soverIIIul click!');
})