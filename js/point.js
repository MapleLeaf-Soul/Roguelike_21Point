var myPoint = 1000;
var myPointSee = 0;
var levelPoint = 0;
var levelPointSee = levelPoint;
var add100Button = true;
var add1000Button = false;
var sub100Button = true;
var sub1000Button = false;
var mypointstartButton = true;
var allinButton = false;

//加注
function LevelPointAdd(thispoint){
	if(levelPoint + thispoint >= 0 && levelPoint + thispoint <= myPoint){
		levelPoint += thispoint;
	}
	NowLevelPoint();
}
function LevelPointAllIn(){
	levelPoint = myPoint;
	NowLevelPoint();
}

//点数显示
async function NowMyPoint(thispoint){
	myPointDiv = document.getElementById('mypointnumber');
	if(thispoint === undefined){
		
	}else{
		myPoint += thispoint;
	}
	while(myPoint != myPointSee){
		if(myPointSee < myPoint){
			myPointSee++;
		}else{
			myPointSee--;
		}
		await delay(3);
		myPointDiv.textContent = myPointSee;
	}
}

//下注显示
async function NowLevelPoint(thispoint){
	levelPointDiv = document.getElementById('levelpointnumber');
	if(thispoint === undefined){
		
	}else{
		levelPoint += thispoint;
	}
	while(levelPoint != levelPointSee){
		if(levelPointSee < levelPoint){
			levelPointSee++;
		}else{
			levelPointSee--;
		}
		await delay(1);
		levelPointDiv.textContent = levelPointSee;
	}
	// if(levelPointSee == 0){
	// 	levelPointDiv.textContent = levelPointSee;
	// }
}	

//下注开始
function LevelPointStart(){
	console.log(levelPoint);
	if(levelPoint>=100){
		document.getElementById('add100').style.visibility = 'hidden';
		document.getElementById('add1000').style.visibility = 'hidden';
		document.getElementById('sub100').style.visibility = 'hidden';
		document.getElementById('sub1000').style.visibility = 'hidden';
		document.getElementById('mypointstart').style.visibility = 'hidden';
		document.getElementById('allin').style.visibility = 'hidden';
		NowMyPoint(-levelPoint);
		GameTurnStart();
	}else{
		LevelPointAdd(100);
	}
}