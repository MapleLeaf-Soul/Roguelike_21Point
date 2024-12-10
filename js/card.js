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

//随机发牌
function RandomCard(){
	while (true) {
		if (cardInDeath.length == DeathCardNumber) {
			NumberTurn();
			return;
		}
		acheCard = Math.floor(Math.random() * 52);
		if (!cardInDeath.includes(acheCard)) {
			card = acheCard;
			return card;
		}
	}
}

function Item13Card(){
	item_13NextCard = parseInt(item_13Card.getAttribute('data-cardInfo'));
	card = RandomCard();
	let color;
	switch (Math.floor(card / 13)) {
		case 0:
			color = "Spade";
			break;
		case 1:
			color = "Heart";
			break;
		case 2:
			color = "Club";
			break;
		case 3:
			color = "Diamond";
			break;
	}
	item_13Card.src = `img/Card/${color}${(card % 13) + 1}.png`;
	if (itemOn_6) {
		item_13Card.setAttribute('data-cardPiont', (((card % 13) + 1) > 9 ? 9 : ((card % 13) + 1)));
	} else {
		item_13Card.setAttribute('data-cardPiont', (((card % 13) + 1) > 10 ? 10 : ((card % 13) + 1)));
	}
	item_13Card.setAttribute('data-cardNumber', myCardNumber);
	item_13Card.setAttribute('data-cardInfo', card);
	cardInDeath.push(card);
}


function Item14Card(){
	myCard = document.getElementById('mycardimg0');
	thisCard = document.querySelector(`#myitem_${item_14ClickID} img`);
	cardCache = parseInt(myCard.getAttribute('data-cardInfo'));
	let color;
	switch (Math.floor(item_14Card / 13)) {
		case 0:
			color = "Spade";
			break;
		case 1:
			color = "Heart";
			break;
		case 2:
			color = "Club";
			break;
		case 3:
			color = "Diamond";
			break;
	}
	myCard.src = `img/Card/${color}${(item_14Card % 13) + 1}.png`;
	if (itemOn_6) {
		myCard.setAttribute('data-cardPiont', (((item_14Card % 13) + 1) > 9 ? 9 : ((item_14Card % 13) + 1)));
	} else {
		myCard.setAttribute('data-cardPiont', (((item_14Card % 13) + 1) > 10 ? 10 : ((item_14Card % 13) + 1)));
	}
	myCard.setAttribute('data-cardNumber', myCardNumber);
	myCard.setAttribute('data-cardInfo', item_14Card);
	
	item_14Card = cardCache;
	switch (Math.floor(item_14Card / 13)) {
		case 0:
			color = "Spade";
			break;
		case 1:
			color = "Heart";
			break;
		case 2:
			color = "Club";
			break;
		case 3:
			color = "Diamond";
			break;
	}
	thisCard.src = `img/Card/${color}${(item_14Card % 13) + 1}.png`;
	myCardScore();
}

function Item15Card(){
	myCard = document.getElementById('mycardimg0');
	cardImgCache = myCard.src;
	cardPointCache = parseInt(myCard.getAttribute('data-cardPiont'));
	myCard.src = bossCardFirst;
	if (itemOn_6) {
		myCard.setAttribute('data-cardPiont', (bossCardFirstPoint > 9 ? 9 : bossCardFirstPoint));
	} else {
		myCard.setAttribute('data-cardPiont', (bossCardFirstPoint > 10 ? 10 : bossCardFirstPoint));
	}
	myCard.setAttribute('data-cardNumber', myCardNumber);
	myCard.setAttribute('data-cardInfo', item_14Card);
	
	bossCardFirst = cardImgCache;
	bossCardFirstPoint = cardPointCache;
	myCardScore();
}

function Text() {
	console.log("click");
	GiveMyCard();
}
function Text2(){
	CleanMyCard();
}
