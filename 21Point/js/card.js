var cardInDeath = [];
var DeathCardNumber = 52;

//延迟函数
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

//放置牌堆
async function MakeDeathCard() {
	DeathCard = document.getElementById('deathcard');
	for (i = 0; i < DeathCardNumber; i++) {
		img = document.createElement('img');
		img.src = 'img/Card/Background.png'
		left = i * 3;
		img.style.left = `${left}px`;
		DeathCard.appendChild(img);
		await delay(50);
	}
}
//牌堆逐个删牌
function MakeDeathCardSubtract() {
	DeathCard = document.getElementById('deathcard');
	DeathCard.removeChild(DeathCard.lastChild);
}


function Text() {
	console.log("click");
	GiveMyCard();
}
function Text2(){
	CleanMyCard();
}


