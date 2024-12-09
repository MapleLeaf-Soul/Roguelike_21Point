var bossType = [0];
var bossTurnNumber = 0;

function BossRandom() {

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