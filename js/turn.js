//初始化开始游戏
async function GameStart() {
	deathcard = document.getElementById('deathcard');
	storyDIV = document.getElementById('storyDIV');
	deathcard.style.display = 'none';
	storyDIV.style.display = 'block';
	myPoint = 1000;
	NowMyPoint();
	document.getElementById('shopDIV').style.display = 'flex';
	document.getElementById('shopskip').style.display = 'flex';
	document.getElementById('gamebutton_start').style.display = 'none';
	ItemRandom();
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
	BossRandom();
}

//发牌回合
function GameTurn() {
	if(myCardNumber == 5){
		myFiveNumber = true;
		NowLevelPoint(levelPoint)
	}
	else if(myallCardScore == 21 && myCardNumber == 2){
		myBlackJack = true;
		NowLevelPoint(2 * levelPoint)
	}
	else if(myallCardScore > 21){
		myBoom = true;
		NowLevelPoint(-levelPoint);
	}
	if (myallCardScore >= 21 || myCardNumber == 5) {
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
	StopTurn()
}

//叫牌
function NextButton() {
	document.getElementById('mybutton_double').style.visibility = 'hidden';
	document.getElementById('mybutton_next').style.visibility = 'hidden';
	document.getElementById('mybutton_stop').style.visibility = 'hidden';
	document.getElementById('mybutton_run').style.visibility = 'hidden';
	GiveMyCard();
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
	switch (bossType[bossTurnNumber]) {
		case 0:
			NoobBoss();
			break;
	}
}

//保险判定
async function RunTurn() {
	if (bossCardFirstPoint == 10){
		document.getElementById('bosscardimg0').src = bossCardFirst;
		await delay(100);
		document.getElementById('bosscardimg0').setAttribute('data-cardPiont', bossCardFirstPoint);
		bossCardScore();
		document.getElementById('nonetext').textContent = "保险啦！";
		await delay(3000);
		TextNextTurn();
	}else{
		NowLevelPoint(- levelPoint / 2);
		GameTurn();
	}
}

//下注按钮回合
function PointTurn(){
	if(add100Button){
		document.getElementById('add100').style.visibility = 'visible';
	}else{
		document.getElementById('add100').style.visibility = 'hidden';
	}
	if(add1000Button){
		document.getElementById('add1000').style.visibility = 'visible';
	}else{
		document.getElementById('add1000').style.visibility = 'hidden';
	}
	if(sub100Button){
		document.getElementById('sub100').style.visibility = 'visible';
	}else{
		document.getElementById('sub100').style.visibility = 'hidden';
	}
	if(sub1000Button){
		document.getElementById('sub1000').style.visibility = 'visible';
	}else{
		document.getElementById('sub1000').style.visibility = 'hidden';
	}
	if(mypointstartButton){
		document.getElementById('mypointstart').style.visibility = 'visible';
	}else{
		document.getElementById('mypointstart').style.visibility = 'hidden';
	}
	if(allinButton){
		document.getElementById('allin').style.visibility = 'visible';
	}else{
		document.getElementById('allin').style.visibility = 'hidden';
	}
	
}

//初步结算
async function StopTurn() {
	if (myallCardScore > 21) {
		NumberTurn()
	} else {
		await delay(1000);
		BossTurn();
	}
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
	console.log(myCardNumber);
	bossFiveNumber = false;
	bossBlackJack = false;
	bossBoom = false;
	myFiveNumber = false;
	myBlackJack = false;
	myBoom = false;
	if(bossCardNumber == 5 && bossallCardScore <= 21){
		bossFiveNumber = true;
	}
	else if(bossallCardScore == 21 && bossCardNumber == 2){
		bossBlackJack = true;
	}
	else if(bossallCardScore > 21){
		bossBoom = true;
	}
	
	if(myCardNumber == 5 && myallCardScore <= 21){
		myFiveNumber = true;
	}
	else if(myallCardScore == 21 && myCardNumber == 2){
		myBlackJack = true;
	}
	else if(myallCardScore > 21){
		myBoom = true;
	}
	
	if (myBoom || (bossFiveNumber && !myFiveNumber && !myBlackJack) || (bossBlackJack && !myBlackJack) || (!bossBoom && bossallCardScore > myallCardScore)){
		document.getElementById('nonetext').textContent = "输！"
		NowLevelPoint(-levelPoint);
	}else if(bossBoom || (myFiveNumber && !bossFiveNumber && !bossBlackJack) || (myBlackJack && !bossBlackJack) || (!myBoom && myallCardScore > bossallCardScore)){
		document.getElementById('nonetext').textContent = "赢！"
		NowLevelPoint(levelPoint);
	}else{
		document.getElementById('nonetext').textContent = "平！"
	}
	
	await delay(1000);
	TextNextTurn();
	
	document.getElementById('nonetext').textContent ="";
}

//下一回合
function TextNextTurn() {
	CleanMyCard();
	CleanbossCard();
	myCardNumber = 0;
	bossCardNumber = 0;
	myCardScore();
	bossCardScore();
	NowMyPoint(levelPoint);
	NowLevelPoint(-levelPoint);
	if(DeathCardNumber - cardInDeath.length > 4){
		PointTurn();
	}else{
		GameNext();
	}
	
}

async function GameNext(){
	cardInDeath = [];
	document.getElementById('deathcard').replaceChildren();
	await MakeDeathCard();
	PointTurn();
}