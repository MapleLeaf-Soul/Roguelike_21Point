var bossType = [0];
var bossTurnNumber = 0;

//随机抽取boss列表
function BossRandom() {
	for (a = 0; a < 4; a++) {
		while (true) {
			randomAche = Math.floor(Math.random() * 4 + 1);
			if (!bossType.includes(randomAche)) {
				bossType.push(randomAche);
				break;
			}
		}
	}
	for (b = 0; b < 4; b++) {
		while (true) {
			randomAche = Math.floor(Math.random() * 4 + 5);
			if (!bossType.includes(randomAche)) {
				bossType.push(randomAche);
				break;
			}
		}
	}
	for (c = 0; c < 4; c++) {
		while (true) {
			randomAche = Math.floor(Math.random() * 4 + 9);
			if (!bossType.includes(randomAche)) {
				bossType.push(randomAche);
				break;
			}
		}
	}
	console.log(bossType);
}

//boss卡图
function BossImg(BossID) {
	bossImg = document.getElementById('bossimg');
	switch (BossID) {
		case 0:
			bossImg.src = 'img/Boss/JOKER-B.png'
			break;
		case 1:
			bossImg.src = 'img/Boss/Diamond11.png'
			break;
		case 2:
			bossImg.src = 'img/Boss/Club11.png'
			break;
		case 3:
			bossImg.src = 'img/Boss/Heart11.png'
			break;
		case 4:
			bossImg.src = 'img/Boss/Spade11.png'
			break;
		case 5:
			bossImg.src = 'img/Boss/Diamond12.png'
			break;
		case 6:
			bossImg.src = 'img/Boss/Club12.png'
			break;
		case 7:
			bossImg.src = 'img/Boss/Heart12.png'
			break;
		case 8:
			bossImg.src = 'img/Boss/Spade12.png'
			break;
		case 9:
			bossImg.src = 'img/Boss/Diamond13.png'
			break;
		case 10:
			bossImg.src = 'img/Boss/Club13.png'
			break;
		case 11:
			bossImg.src = 'img/Boss/Heart13.png'
			break;
		case 12:
			bossImg.src = 'img/Boss/Spade13.png'
			break;
	}
	console.log("boss" + bossType[bossTurnNumber <= 12 ? bossTurnNumber : ((bossTurnNumber % 12) + 1)])
}

//bossAI选择
async function BossSwitch(BossID) {
	switch (BossID) {
		case 0:
			NoobBoss();
			break;
		case 1:
			Boss_1();
			break;
		case 2:
			Boss_2();
			break;
		case 3:
			Boss_3();
			break;
		case 4:
			Boss_4();
			break;
		case 5:
			Boss_5();
			break;
		case 6:
			Boss_6();
			break;
		case 7:
			Boss_7();
			break;
		case 8:
			Boss_8();
			break;
		case 9:
			Boss_9();
			break;
		case 10:
			Boss_10();
			break;
		case 11:
			Boss_11();
			break;
		case 12:
			Boss_12();
			break;
	}
}

//第0关笨蛋boss
async function NoobBoss() {
	while (bossallCardScore < 17 && bossCardNumber != 5) {
		if (cardInDeath.length == DeathCardNumber) {
			NumberTurn();
			return;
		}
		GiveBossCard();
		await delay(1000);
	}
	NumberTurn();
}

//各bossAI，还没写，总之先留出来假装我写了
async function Boss_1() {
	NoobBoss();
}
async function Boss_2() {
	NoobBoss();
}
async function Boss_3() {
	NoobBoss();
}
async function Boss_4() {
	NoobBoss();
}
async function Boss_5() {
	NoobBoss();
}
async function Boss_6() {
	NoobBoss();
}
async function Boss_7() {
	NoobBoss();
}
async function Boss_8() {
	NoobBoss();
}
async function Boss_9() {
	NoobBoss();
}
async function Boss_10() {
	NoobBoss();
}
async function Boss_11() {
	NoobBoss();
}
async function Boss_12() {
	NoobBoss();
}