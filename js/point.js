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
function LevelPointAdd(thispoint) {
	if (levelPoint + thispoint >= 0 && levelPoint + thispoint <= myPoint) {
		levelPoint += thispoint;
	}
	if (myPoint < 100) {
		levelPoint = myPoint;
	}
	NowLevelPoint();
}

function LevelPointAllIn() {
	levelPoint = myPoint;
	NowLevelPoint();
	LevelPointStart();
}

//点数显示
async function NowMyPoint(thispoint) {
	myPointDiv = document.getElementById('mypointnumber');
	if (thispoint === undefined) {

	} else {
		myPoint += thispoint;
	}
	while (myPoint != myPointSee) {
		if (myPointSee < myPoint) {
			myPointSee += Math.ceil((myPoint - myPointSee) / 50);
			if ((myPoint - myPointSee) / 5 < 10) {
				// myPointSee++;
			}
		} else {
			myPointSee -= Math.ceil((myPointSee - myPoint) / 50);
			if ((myPointSee - myPoint) / 5 < 10) {
				// myPointSee--;
			}
		}
		await delay(10);
		myPointDiv.textContent = myPointSee;
		//console.log((myPoint - myPointSee))
	}
}

//下注显示
async function NowLevelPoint(thispoint) {
	levelPointDiv = document.getElementById('levelpointnumber');
	if (thispoint === undefined) {

	} else {
		levelPoint += thispoint;
	}
	while (levelPoint != levelPointSee) {
		if (levelPointSee < levelPoint) {
			levelPointSee += Math.ceil((levelPoint - levelPointSee) / 25);
			if ((levelPoint - levelPointSee) / 5 < 10) {
				// levelPointSee++;
			}
		} else {
			levelPointSee -= Math.ceil((levelPointSee - levelPoint) / 25);
			if ((levelPointSee - levelPoint) / 5 < 10) {
				// levelPointSee--;
			}
		}
		await delay(10);
		levelPointDiv.textContent = levelPointSee;
	}
	// if(levelPointSee == 0){
	// 	levelPointDiv.textContent = levelPointSee;
	// }
}

//下注开始
function LevelPointStart() {
	//console.log(levelPoint);
	if (levelPoint >= 100 || levelPoint == myPoint) {
		document.getElementById('add100').style.visibility = 'hidden';
		document.getElementById('add1000').style.visibility = 'hidden';
		document.getElementById('sub100').style.visibility = 'hidden';
		document.getElementById('sub1000').style.visibility = 'hidden';
		document.getElementById('mypointstart').style.visibility = 'hidden';
		document.getElementById('allin').style.visibility = 'hidden';
		NowMyPoint(-levelPoint);
		GameTurnStart();
	} else {
		if (myPoint < 100) {
			LevelPointAdd(myPoint);
		} else {
			LevelPointAdd(100);
		}
	}
}