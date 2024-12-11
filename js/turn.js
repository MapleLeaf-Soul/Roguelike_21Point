//初始化开始游戏
var gamePointMax = 21
var playerTurn = false;

async function GameStart() {
	document.getElementById('deathcard').style.display = 'none';
	document.getElementById('storyDIV').style.display = 'block';
	myPoint = 1000;
	NowMyPoint();
	document.getElementById('shopDIV').style.display = 'flex';
	document.getElementById('shopskip').style.display = 'flex';
	document.getElementById('gamebutton_start').style.display = 'none';
	ItemRandom();
	BossRandom();
}
var turnNumber = 0;

//开始游戏发牌
async function GameTurnStart() {
	playerTurn = true;
	turnNumber = 0;
	await delay(100);
	GiveMyCard();
	await delay(200);
	GiveMyCard();
	await delay(200);
	GiveBossCard();
	await delay(200);
	GiveBossCard();
	await delay(200);
	GameTurn();

}

//发牌回合
function GameTurn() {
	if (myCardNumber == 5 && myallCardScore <= gamePointMax) {
		myFiveNumber = true;
		NowLevelPoint(levelPoint);
	} else if (myallCardScore == 21 && myCardNumber == 2) {
		myBlackJack = true;
		NowLevelPoint(2 * levelPoint);
	} else if (itemOn_6 && myallCardScore == 20 && myCardNumber == 2) {
		myBlackJack = true;
		NowLevelPoint(2 * levelPoint);
	} else if (itemOn_5 && myallCardScore == 21 && haveAce) {
		myBlackJack = true;
		NowLevelPoint(2 * levelPoint);
	} else if (myallCardScore > gamePointMax) {
		myBoom = true;
		NowLevelPoint(-levelPoint);
	}




	if (myallCardScore >= gamePointMax || myCardNumber == 5) {
		StopTurn();
	} else {
		//按钮
		if (turnNumber == 0 && (myPoint >= 2 * levelPoint)) {
			document.getElementById('mybutton_double').style.visibility = 'visible';
		} else {
			document.getElementById('mybutton_double').style.visibility = 'hidden';
		}

		document.getElementById('mybutton_next').style.visibility = 'visible';

		document.getElementById('mybutton_stop').style.visibility = 'visible';

		if (turnNumber == 0 && bossallCardScore == 11 && bossCardNumber == 2) {
			document.getElementById('mybutton_run').style.visibility = 'visible';
		} else {
			document.getElementById('mybutton_run').style.visibility = 'hidden';
		}
	}
	turnNumber++;
	playerTurn = true;
}

//双倍
function DoubleButton() {
	document.getElementById('mybutton_double').style.visibility = 'hidden';
	document.getElementById('mybutton_next').style.visibility = 'hidden';
	document.getElementById('mybutton_stop').style.visibility = 'hidden';
	document.getElementById('mybutton_run').style.visibility = 'hidden';
	NowMyPoint(-levelPoint);
	NowLevelPoint(levelPoint);
	GiveMyCard();
	if (itemOn_13) {
		Item13Card();
		itemOn_13 = false;
	}
	StopTurn()
}

//叫牌
function NextButton() {
	document.getElementById('mybutton_double').style.visibility = 'hidden';
	document.getElementById('mybutton_next').style.visibility = 'hidden';
	document.getElementById('mybutton_stop').style.visibility = 'hidden';
	document.getElementById('mybutton_run').style.visibility = 'hidden';
	GiveMyCard();
	if (itemOn_13) {
		Item13Card();
		itemOn_13 = false;
	}
	GameTurn();
}

//停牌
function StopButton() {
	document.getElementById('mybutton_double').style.visibility = 'hidden';
	document.getElementById('mybutton_next').style.visibility = 'hidden';
	document.getElementById('mybutton_stop').style.visibility = 'hidden';
	document.getElementById('mybutton_run').style.visibility = 'hidden';
	StopTurn();
}

//保险
function RunButton() {
	document.getElementById('mybutton_double').style.visibility = 'hidden';
	document.getElementById('mybutton_next').style.visibility = 'hidden';
	document.getElementById('mybutton_stop').style.visibility = 'hidden';
	document.getElementById('mybutton_run').style.visibility = 'hidden';
	RunTurn();
}

//boss回合
var bossTurnNumber = 0;
async function BossTurn() {
	document.getElementById('bosscardimg0').src = bossCardFirst;
	await delay(100);
	document.getElementById('bosscardimg0').setAttribute('data-cardPiont', bossCardFirstPoint);
	bossCardScore();
	await delay(1000);
	if (itemOn_11) {
		console.log("showtime");
		GiveBossCard();
		await delay(1000);
		GiveBossCard();
		await delay(1000);
		itemOn_11 = false;
		if (bossallCardScore + 5 <= gamePointMax) {
			GiveBossCard();
			await delay(1000);
		}
		NumberTurn();
	} else if (itemOn_12) {
		console.log("shine");
		itemOn_12 = false;
		NumberTurn();
	} else {
		switch (bossType[bossTurnNumber]) {
			case 0:
				NoobBoss();
				break;
		}
	}

}

//保险判定
async function RunTurn() {
	if (bossCardFirstPoint == 10) {
		document.getElementById('bosscardimg0').src = bossCardFirst;
		await delay(100);
		document.getElementById('bosscardimg0').setAttribute('data-cardPiont', bossCardFirstPoint);
		bossCardScore();
		document.getElementById('nonetext').textContent = "理赔成功！";
		await delay(3000);
		TextNextTurn();
		playerTurn = false;
	} else {
		NowLevelPoint(-levelPoint / 2);
		GameTurn();
	}
}

//下注按钮回合
function PointTurn() {
	if (add100Button) {
		document.getElementById('add100').style.visibility = 'visible';
	} else {
		document.getElementById('add100').style.visibility = 'hidden';
	}
	if (add1000Button) {
		document.getElementById('add1000').style.visibility = 'visible';
	} else {
		document.getElementById('add1000').style.visibility = 'hidden';
	}
	if (sub100Button) {
		document.getElementById('sub100').style.visibility = 'visible';
	} else {
		document.getElementById('sub100').style.visibility = 'hidden';
	}
	if (sub1000Button) {
		document.getElementById('sub1000').style.visibility = 'visible';
	} else {
		document.getElementById('sub1000').style.visibility = 'hidden';
	}
	if (mypointstartButton) {
		document.getElementById('mypointstart').style.visibility = 'visible';
	} else {
		document.getElementById('mypointstart').style.visibility = 'hidden';
	}
	if (allinButton) {
		document.getElementById('allin').style.visibility = 'visible';
	} else {
		document.getElementById('allin').style.visibility = 'hidden';
	}

}



//初步结算
async function StopTurn() {
	if (myallCardScore > gamePointMax) {
		NumberTurn()
	} else {
		await delay(1000);
		BossTurn();
	}
	playerTurn = false;
}

//点数结算
var bossFiveNumber = false;
var bossBlackJack = false;
var bossBoom = false;
var myFiveNumber = false;
var myBlackJack = false;
var myBoom = false;

async function NumberTurn() {
	document.getElementById('mybutton_double').style.visibility = 'hidden';
	document.getElementById('mybutton_next').style.visibility = 'hidden';
	document.getElementById('mybutton_stop').style.visibility = 'hidden';
	document.getElementById('mybutton_run').style.visibility = 'hidden';
	console.log("myCardNumber" + myCardNumber);
	bossFiveNumber = false;
	bossBlackJack = false;
	bossBoom = false;
	myFiveNumber = false;
	myBlackJack = false;
	myBoom = false;
	if (bossCardNumber == 5 && bossallCardScore <= gamePointMax) {
		bossFiveNumber = true;
	} else if (bossallCardScore == 21 && bossCardNumber == 2) {
		bossBlackJack = true;
	} else if (bossallCardScore > gamePointMax) {
		bossBoom = true;
	}

	if (myCardNumber == 5 && myallCardScore <= gamePointMax) {
		myFiveNumber = true;
	} else if (myallCardScore == 21 && myCardNumber == 2) {
		myBlackJack = true;
	} else if (itemOn_6 && myallCardScore == 20 && myCardNumber == 2) {
		myBlackJack = true;
	} else if (itemOn_5 && myallCardScore == 21 && haveAce) {
		myBlackJack = true;
	} else if (myallCardScore > gamePointMax) {
		myBoom = true;
	}

	if (myBoom || (bossFiveNumber && !myFiveNumber && !myBlackJack) || (bossBlackJack && !myBlackJack) || (!
			bossBoom && bossallCardScore > myallCardScore)) {
		document.getElementById('nonetext').textContent = "输！"
		NowLevelPoint(-levelPoint);
	} else if (bossBoom || (myFiveNumber && !bossFiveNumber && !bossBlackJack) || (myBlackJack && !bossBlackJack) ||
		(!myBoom && myallCardScore > bossallCardScore)) {
		document.getElementById('nonetext').textContent = "赢！"
		NowLevelPoint(levelPoint);
	} else if (itemOn_2) {
		document.getElementById('nonetext').textContent = "平！"
	} else {
		document.getElementById('nonetext').textContent = "输！"
		NowLevelPoint(-levelPoint);
	}

	await delay(1000);
	TextNextTurn();
}

//下一回合
function TextNextTurn() {
	document.getElementById('nonetext').textContent = "";
	console.log("透视CD" + itemColdTime_9);
	console.log("偷看CD" + itemColdTime_10);
	console.log("强制表演CD" + itemColdTime_11);
	console.log("封锁CD" + itemColdTime_12);
	if (itemColdTime_9 <= 0) {
		document.getElementById(`myitem_${item_9ClickID}`).style.border = 'yellow 2px solid';
	} else {
		itemColdTime_9--;
	}
	if (itemColdTime_10 <= 0) {
		document.getElementById(`myitem_${item_10ClickID}`).style.border = 'yellow 2px solid';
	} else {
		document.querySelector(`#myitem_${item_10ClickID} img`).src = 'img/icon/Heart1.png';
		itemColdTime_10--;
	}
	if (itemColdTime_11 <= 0) {
		document.getElementById(`myitem_${item_11ClickID}`).style.border = 'yellow 2px solid';
	} else {
		itemColdTime_11--;
	}
	if (itemColdTime_12 <= 0) {
		document.getElementById(`myitem_${item_12ClickID}`).style.border = 'yellow 2px solid';
	} else {
		itemColdTime_12--;
	}
	itemOn_13 = false;
	document.getElementById(`myitem_${item_13ClickID}`).style.border = 'yellow 2px solid';
	itemOn_15 = false;
	document.getElementById(`myitem_${item_15ClickID}`).style.border = 'yellow 2px solid';
	CleanMyCard();
	CleanbossCard();
	haveAce = false;
	myCardNumber = 0;
	bossCardNumber = 0;
	myCardScore();
	bossCardScore();
	NowMyPoint(levelPoint);
	NowLevelPoint(-levelPoint);
	if (myPoint <= 0 && itemOn_3) {
		itemOn_3 = false;
		myPoint = 100;
		NowMyPoint();
	} else if (myPoint <= 0) {
		EndGame();
		return;
	}
	if (myPoint > 2000) {
		add1000Button = true;
		sub1000Button = true;
	} else {
		add1000Button = false;
		sub1000Button = false;
	}
	if (DeathCardNumber - cardInDeath.length > 4) {
		PointTurn();
	} else {
		GameNext();
	}

}

async function GameNext() {
	cardInDeath = [];
	document.getElementById('deathcard').replaceChildren();
	document.getElementById('deathcard').style.display = 'none';
	document.getElementById('storyDIV').style.display = 'block';
	document.getElementById('shopDIV').style.display = 'flex';
	document.getElementById('shopskip').style.display = 'flex';
	document.getElementById('gamebutton_start').style.display = 'none';
	if (allMyItemNumber < 6) {
		ItemRandom();
	} else {
		cardInDeath = [];
		document.getElementById('deathcard').style.display = 'block';
		document.getElementById('storyDIV').style.display = 'none';
		document.getElementById('shopDIV').style.display = 'none';
		document.getElementById('shopskip').style.display = 'none';
		document.getElementById('gamebutton_start').style.display = 'flex';
		await MakeDeathCard();
		PointTurn();
	}
}

function EndGame() {
	alert("游戏结束");
	cardInDeath = [];
	document.getElementById('deathcard').replaceChildren();
	document.getElementById('myitem_1').replaceChildren();
	document.getElementById('myitem_1').style.border = 'none';
	document.getElementById('myitem_2').replaceChildren();
	document.getElementById('myitem_2').style.border = 'none';
	document.getElementById('myitem_3').replaceChildren();
	document.getElementById('myitem_3').style.border = 'none';
	document.getElementById('myitem_4').replaceChildren();
	document.getElementById('myitem_4').style.border = 'none';
	document.getElementById('myitem_5').replaceChildren();
	document.getElementById('myitem_5').style.border = 'none';
	document.getElementById('myitem_6').replaceChildren();
	document.getElementById('myitem_6').style.border = 'none';
	itemOn_1 = false;
	itemOn_2 = false;
	itemOn_3 = false;
	itemOn_4 = false;
	itemOn_5 = false;
	itemOn_6 = false;
	itemOn_7 = false;
	itemOn_8 = false;
	itemOn_9 = false;
	itemOn_10 = false;
	itemOn_11 = false;
	itemOn_12 = false;
	itemOn_13 = false;
	itemOn_14 = false;
	itemOn_15 = false;
	itemColdTime_9 = 0;
	itemColdTime_10 = 0;
	itemColdTime_11 = 0;
	itemColdTime_12 = 0;
	allMyItem = [];
	allMyItemNumber = 0;
	allinButton = false;
	gamePointMax = 21;
	isCardFirstBlack = 13;
	GameStart();
}