var bossCardNumber = 0;
var bossCardFirst = 'img/Card/Background.png'
var bossCardFirstPoint = 0;
//给庄家发牌，可以传参
function GiveBossCard(card) {
	//随机
	if (card === undefined) {
		if (nextCard != -1) {
			card = nextCard;
			itemOn_9 = false;
			nextCard = -1;
			document.querySelector(`#myitem_${item_9ClickID} img`).src = 'img/icon/Heart1.png';
		} else if (item_13NextCard != -1) {
			card = item_13NextCard;
			item_13NextCard = -1;
		} else {
			card = RandomCard();
		}
	}
	//标记已抽卡
	if (!cardInDeath.includes(acheCard)) {
		cardInDeath.push(card);
	}
	//显示手卡
	bosscard = document.getElementById('mastercard');
	img = document.createElement('img');
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
	if (bossCardNumber == 0) {
		bossCardFirst = `img/Card/${color}${(card % 13) + 1}.png`;
		img.src = 'img/Card/Background.png';
		bossCardFirstPoint = (((card % 13) + 1) > 10 ? 10 : ((card % 13) + 1));
		img.setAttribute('data-cardPiont', 0);
	} else {
		img.src = `img/Card/${color}${(card % 13) + 1}.png`;
		img.setAttribute('data-cardPiont', (((card % 13) + 1) > 10 ? 10 : ((card % 13) + 1)));
	}
	img.id = `bosscardimg${bossCardNumber}`;
	img.style.left = '0';
	img.setAttribute('data-cardNumber', bossCardNumber);
	bossCardNumber++;

	MakeDeathCardSubtract();
	bosscard.appendChild(img);

	bossCardLeftChange();
	bossCardScore();
	console.log("mycard" + card);
}

//屏幕改变时激活
window.addEventListener('resize', bossCardLeftChange)

//灵活手牌位置
function bossCardLeftChange() {
	//顺便放一下boss头像div位置
	bossimgdiv = document.getElementById('bossimgdiv');
	bossimg = document.getElementById('bossimg');
	if (window.innerHeight / 6 > window.innerWidth / 10){
		bossimgdiv.style.width = '10vw'
		bossimgdiv.style.height = '10vw'
		bossimg.style.width = '10vw'
	}else{
		bossimgdiv.style.width = '20vh'
		bossimgdiv.style.height = '20vh'
		bossimg.style.width = '20vh'
	}
	// console.log("高" + window.innerHeight + "高2" + window.innerHeight / 10 + "宽" + window.innerWidth + "宽2" + window.innerWidth / 10)
	
	bosscard = document.getElementById('mastercard');
	bossCardWidth = bosscard.offsetWidth - 10;
	card0 = document.getElementById('bosscardimg0');
	CardWidth = card0.offsetWidth

	if (bossCardNumber > 1) {
		card1 = document.getElementById('bosscardimg1');
	}
	if (bossCardNumber > 2) {
		card2 = document.getElementById('bosscardimg2');
	}
	if (bossCardNumber > 3) {
		card3 = document.getElementById('bosscardimg3');
	}
	if (bossCardNumber > 4) {
		card4 = document.getElementById('bosscardimg4');
	}
	switch (bossCardNumber) {
		case 5:
			if ((bossCardWidth - CardWidth) > CardWidth * 4) {
				card4.style.left = `${(CardWidth * 4)}px`;
			} else {
				card4.style.left = `${(bossCardWidth - CardWidth)}px`;
			}
		case 4:
			if ((bossCardWidth - CardWidth) / (bossCardNumber - 1) * 3 > CardWidth * 3) {
				card3.style.left = `${(CardWidth * 3)}px`;
			} else {
				card3.style.left = `${(bossCardWidth - CardWidth) / (bossCardNumber -1) * 3}px`;
			}

		case 3:
			if ((bossCardWidth - CardWidth) / (bossCardNumber - 1) * 2 > CardWidth * 2) {
				card2.style.left = `${(CardWidth * 2)}px`;
			} else {
				card2.style.left = `${(bossCardWidth - CardWidth) / (bossCardNumber -1) * 2}px`;
			}

		case 2:
			if ((bossCardWidth - CardWidth) / (bossCardNumber - 1) > CardWidth) {
				card1.style.left = `${(CardWidth )}px`;
			} else {
				card1.style.left = `${(bossCardWidth - CardWidth) / (bossCardNumber -1) }px`;
			}
		case 1:
			card0.style.left = 0;
	}
	
}


var bossallCardScore = 0;

//算数字
function bossCardScore() {
	card0Score = 0;
	card1Score = 0;
	card2Score = 0;
	card3Score = 0;
	card4Score = 0;
	scoreDIV = document.getElementById('masterbutton_score');

	if (bossCardNumber > 0) {
		card0 = document.getElementById('bosscardimg0');
		card0Score = parseInt(card0.getAttribute('data-cardPiont'));
	}
	if (bossCardNumber > 1) {
		card1 = document.getElementById('bosscardimg1');
		card1Score = parseInt(card1.getAttribute('data-cardPiont'));
	}
	if (bossCardNumber > 2) {
		card2 = document.getElementById('bosscardimg2');
		card2Score = parseInt(card2.getAttribute('data-cardPiont'));
	}
	if (bossCardNumber > 3) {
		card3 = document.getElementById('bosscardimg3');
		card3Score = parseInt(card3.getAttribute('data-cardPiont'));
	}
	if (bossCardNumber > 4) {
		card4 = document.getElementById('bosscardimg4');
		card4Score = parseInt(card4.getAttribute('data-cardPiont'));
	}
	
	//可能重复，是否能够修改暂且存疑
	//否决修改，双ACE时可能出现问题
	bossallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	if (card0Score == 1 && bossallCardScore < 12) {
		card0Score = 11;
		bossallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	} else if (card0Score == 11 && bossallCardScore > 21) {
		card0Score = 1;
		bossallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	}
	if (card1Score == 1 && bossallCardScore < 12) {
		card1Score = 11;
		bossallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	} else if (card1Score == 11 && bossallCardScore > 21) {
		card1Score = 1;
		bossallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	}
	if (card2Score == 1 && bossallCardScore < 12) {
		card2Score = 11;
		bossallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	} else if (card2Score == 11 && bossallCardScore > 21) {
		card2Score = 1;
		bossallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	}
	if (card3Score == 1 && bossallCardScore < 12) {
		card3Score = 11;
		bossallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	} else if (card3Score == 11 && bossallCardScore > 21) {
		card3Score = 1;
		bossallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	}
	if (card4Score == 1 && bossallCardScore < 12) {
		card4Score = 11;
		bossallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	} else if (card4Score == 11 && bossallCardScore > 21) {
		card4Score = 1;
		bossallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	}
	scoreDIV.textContent = bossallCardScore;
}

//清空手牌
function CleanbossCard() {
	bossCardNumber = 0;
	document.getElementById('mastercard').innerHTML = '';
}