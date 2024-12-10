var myCardNumber = 0;
var haveAce = false;

//给己方发牌，可以传参
function GiveMyCard(card) {
	//随机
	if (card === undefined) {
		if (nextCard != -1) {
			card = nextCard;
			itemOn_9 = false;
			NextCard = -1;
			document.querySelector(`#myitem_${item_9ClickID} img`).src = 'img/icon/Heart1.png';
		} else if(item_13NextCard != -1){
			card = item_13NextCard;
			item_13NextCard = -1;
		}else{
			card = RandomCard();
		}
	}
	//标记已抽卡
	if (!cardInDeath.includes(card)) {
		cardInDeath.push(card);
	}
	if ((card % 13 + 1) == 1) {
		haveAce = true;
	}

	//显示手卡
	mycard = document.getElementById('mycard');
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
	img.src = `img/Card/${color}${(card % 13) + 1}.png`;
	img.id = `mycardimg${myCardNumber}`;
	img.style.left = '0';
	if (itemOn_6) {
		img.setAttribute('data-cardPiont', (((card % 13) + 1) > 9 ? 9 : ((card % 13) + 1)));
	} else {
		img.setAttribute('data-cardPiont', (((card % 13) + 1) > 10 ? 10 : ((card % 13) + 1)));
	}

	img.setAttribute('data-cardNumber', myCardNumber);
	img.setAttribute('data-cardInfo', card);
	
	img.setAttribute('onclick', `myCardImgClick(${myCardNumber})`);
	myCardNumber++;

	MakeDeathCardSubtract();
	mycard.appendChild(img);

	myCardLeftChange();
	myCardScore()
}

//屏幕改变时激活
window.addEventListener('resize', myCardLeftChange)

//灵活手牌位置
function myCardLeftChange() {
	mycard = document.getElementById('mycard');
	myCardWidth = mycard.offsetWidth - 10;
	card0 = document.getElementById('mycardimg0');
	CardWidth = card0.offsetWidth

	if (myCardNumber > 1) {
		card1 = document.getElementById('mycardimg1');
	}
	if (myCardNumber > 2) {
		card2 = document.getElementById('mycardimg2');
	}
	if (myCardNumber > 3) {
		card3 = document.getElementById('mycardimg3');
	}
	if (myCardNumber > 4) {
		card4 = document.getElementById('mycardimg4');
	}
	switch (myCardNumber) {
		case 5:
			if ((myCardWidth - CardWidth) > CardWidth * 4) {
				card4.style.left = `${(CardWidth * 4)}px`;
			} else {
				card4.style.left = `${(myCardWidth - CardWidth)}px`;
			}
		case 4:
			if ((myCardWidth - CardWidth) / (myCardNumber - 1) * 3 > CardWidth * 3) {
				card3.style.left = `${(CardWidth * 3)}px`;
			} else {
				card3.style.left = `${(myCardWidth - CardWidth) / (myCardNumber -1) * 3}px`;
			}

		case 3:
			if ((myCardWidth - CardWidth) / (myCardNumber - 1) * 2 > CardWidth * 2) {
				card2.style.left = `${(CardWidth * 2)}px`;
			} else {
				card2.style.left = `${(myCardWidth - CardWidth) / (myCardNumber -1) * 2}px`;
			}

		case 2:
			if ((myCardWidth - CardWidth) / (myCardNumber - 1) > CardWidth) {
				card1.style.left = `${(CardWidth )}px`;
			} else {
				card1.style.left = `${(myCardWidth - CardWidth) / (myCardNumber -1) }px`;
			}
		case 1:
			card0.style.left = 0;
	}
}


var myallCardScore = 0;

//算己方数字
function myCardScore() {
	card0Score = 0;
	card1Score = 0;
	card2Score = 0;
	card3Score = 0;
	card4Score = 0;
	scoreDIV = document.getElementById('mybutton_score');

	if (myCardNumber > 0) {
		card0 = document.getElementById('mycardimg0');
		card0Score = parseInt(card0.getAttribute('data-cardPiont'));
	}
	if (myCardNumber > 1) {
		card1 = document.getElementById('mycardimg1');
		card1Score = parseInt(card1.getAttribute('data-cardPiont'));
	}
	if (myCardNumber > 2) {
		card2 = document.getElementById('mycardimg2');
		card2Score = parseInt(card2.getAttribute('data-cardPiont'));
	}
	if (myCardNumber > 3) {
		card3 = document.getElementById('mycardimg3');
		card3Score = parseInt(card3.getAttribute('data-cardPiont'));
	}
	if (myCardNumber > 4) {
		card4 = document.getElementById('mycardimg4');
		card4Score = parseInt(card4.getAttribute('data-cardPiont'));
	}
	myallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	if (card0Score == 1 && myallCardScore < 12) {
		card0Score = 11;
		myallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	} else if (card0Score == 11 && myallCardScore > 21) {
		card0Score = 1;
		myallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	}
	if (card1Score == 1 && myallCardScore < 12) {
		card1Score = 11;
		myallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	} else if (card1Score == 11 && myallCardScore > 21) {
		card1Score = 1;
		myallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	}
	if (card2Score == 1 && myallCardScore < 12) {
		card2Score = 11;
		myallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	} else if (card2Score == 11 && myallCardScore > 21) {
		card2Score = 1;
		myallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	}
	if (card3Score == 1 && myallCardScore < 12) {
		card3Score = 11;
		myallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	} else if (card3Score == 11 && myallCardScore > 21) {
		card3Score = 1;
		myallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	}
	if (card4Score == 1 && myallCardScore < 12) {
		card4Score = 11;
		myallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	} else if (card4Score == 11 && myallCardScore > 21) {
		card4Score = 1;
		myallCardScore = (card0Score + card1Score + card2Score + card3Score + card4Score);
	}

	if (itemOn_4) {
		myallCardScore += parseInt(myPoint.toString()[0]);
	}

	scoreDIV.textContent = myallCardScore;
}

//清空手牌
function CleanMyCard() {
	myCardNumber = 0;
	document.getElementById('mycard').innerHTML = '';
}

function myCardImgClick(cardID) {
	item_13Card = document.getElementById(`mycardimg${cardID}`);
	if(itemOn_13){
		switch(myCardNumber){
			case 5:
			document.getElementById('mycardimg4').style.transform = 'translateY(0)';
			case 4:
			document.getElementById('mycardimg3').style.transform = 'translateY(0)';
			case 3:
			document.getElementById('mycardimg2').style.transform = 'translateY(0)';
			case 2:
			document.getElementById('mycardimg1').style.transform = 'translateY(0)';
			case 1:
			document.getElementById('mycardimg0').style.transform = 'translateY(0)';
		}
		item_13Card.style.transform = 'translateY(-1vh)';
	}
}