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
	if(myPoint < 100){
		levelPoint = myPoint;
	}
	NowLevelPoint();
}

function LevelPointAllIn(){
	levelPoint = myPoint;
	NowLevelPoint();
	LevelPointStart();
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
			if (myPointSee < myPoint - 1000){
				myPointSee += 10;
			}
			if (myPointSee < myPoint - 200){
				myPointSee += 5;
			}
			myPointSee++;
		}else{
			if (myPointSee > myPoint + 1000){
				myPointSee -= 10;
			}
			if (myPointSee > myPoint + 200){
				myPointSee -= 5;
			}
			myPointSee--;
		}
		await delay(5);
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
			if (levelPointSee < levelPoint - 1000){
				levelPointSee += 10;
			}
			if (levelPointSee < levelPoint - 200){
				levelPointSee += 5;
			}
			levelPointSee++;
		}else{
			if (levelPointSee > levelPoint + 1000){
				levelPointSee -= 10;
			}
			if (levelPointSee > levelPoint + 200){
				levelPointSee -= 5;
			}
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
	if(levelPoint>=100 || levelPoint == myPoint){
		document.getElementById('add100').style.visibility = 'hidden';
		document.getElementById('add1000').style.visibility = 'hidden';
		document.getElementById('sub100').style.visibility = 'hidden';
		document.getElementById('sub1000').style.visibility = 'hidden';
		document.getElementById('mypointstart').style.visibility = 'hidden';
		document.getElementById('allin').style.visibility = 'hidden';
		NowMyPoint(-levelPoint);
		GameTurnStart();
	}else{
		if(myPoint < 100){
			LevelPointAdd(myPoint);
		}else{
			LevelPointAdd(100);
		}
		
	}
}