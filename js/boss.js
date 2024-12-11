var bossType = [0];
var bossTurnNumber = 0;

function BossRandom() {
	
}
function BossImg(){
	bossImg = document.getElementById('bossimg');
	// switch(bossTurnNumber){
	// 	case 0:
	// 	bossImg.src = 'img/Boss/BossNoob.png'
	// 	break;
	// }
}

async function NoobBoss() {
	while (bossallCardScore < 17 && bossCardNumber != 5){
		if(cardInDeath.length == DeathCardNumber){
			NumberTurn();
			return;
		}
		GiveBossCard();
		await delay(1000);
	}
	NumberTurn();
}